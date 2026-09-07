const { test } = require("node:test");
const assert = require("node:assert");

const filterProperties = require("../dist/lib/mainfunctions/propertyFilter").default;
const mergeData = require("../dist/lib/modules/poe.ninja/fetch/merge/mergeData").default;
const mergeExchangeData = require("../dist/lib/modules/poe.ninja/fetch/merge/mergeExchangeData").default;
const urlGenerator = require("../dist/lib/modules/poe.ninja/func/urlGenerator").default;
const watchUrlGenerator = require("../dist/lib/modules/poe.watch/func/WatchUrlGenerator").default;
const ValidationError = require("../dist/lib/errors/ValidationError").default;
const fetchData = require("../dist/lib/modules/poe.ninja/fetch/fetchData").default;

test("filterProperties picks only requested props and omits missing ones", () => {
  const result = filterProperties([{ a: 1, b: 2 }], ["a", "missing"]);
  assert.deepStrictEqual(result, [{ a: 1 }]);
});

test("filterProperties throws ValidationError for non-array data/properties", () => {
  assert.throws(() => filterProperties("nope", ["a"]), ValidationError);
  assert.throws(() => filterProperties([], "nope"), ValidationError);
});

test("filterProperties prints nothing to the console for a bogus property", () => {
  const originalWarn = console.warn;
  const originalLog = console.log;
  let called = false;
  console.warn = () => { called = true; };
  console.log = () => { called = true; };
  try {
    filterProperties([{ a: 1 }], ["bogus"]);
  } finally {
    console.warn = originalWarn;
    console.log = originalLog;
  }
  assert.strictEqual(called, false);
});

test("mergeData joins lines to currencyDetails by name and keeps unmatched lines", () => {
  const lines = [{ currencyTypeName: "Divine Orb" }, { currencyTypeName: "Unknown Thing" }];
  const currencyDetails = [{ id: 1, name: "Divine Orb", icon: "icon-url" }];
  const result = mergeData(lines, currencyDetails);
  assert.strictEqual(result.length, 2);
  assert.strictEqual(result[0].name, "Divine Orb");
  assert.strictEqual(result[0].icon, "icon-url");
  assert.strictEqual(result[1].currencyTypeName, "Unknown Thing");
  assert.strictEqual(result[1].name, undefined);
});

test("mergeExchangeData joins by id, builds absolute icon, sets chaosValue when primary is chaos", () => {
  const lines = [{ id: "azure-oil", primaryValue: 5 }];
  const items = [{ id: "azure-oil", name: "Azure Oil", image: "/gen/image/azure.png", detailsId: "azure-oil", category: "oil" }];
  const result = mergeExchangeData(lines, items, { primary: "chaos" });
  assert.strictEqual(result[0].name, "Azure Oil");
  assert.strictEqual(result[0].icon, "https://web.poecdn.com/gen/image/azure.png");
  assert.strictEqual(result[0].chaosValue, 5);
});

test("mergeExchangeData omits chaosValue when primary is not chaos", () => {
  const lines = [{ id: "azure-oil", primaryValue: 5 }];
  const items = [{ id: "azure-oil", name: "Azure Oil", image: "/gen/image/azure.png" }];
  const result = mergeExchangeData(lines, items, { primary: "divine" });
  assert.strictEqual("chaosValue" in result[0], false);
  assert.strictEqual(result[0].primaryValue, 5);
});

test("urlGenerator builds the correct path per typeName and encodes the league", () => {
  const url = urlGenerator("Standard & Co", "currencyoverview", "Currency");
  assert.strictEqual(
    url,
    "https://poe.ninja/poe1/api/economy/stash/current/currency/overview?league=Standard%20%26%20Co&type=Currency",
  );
  assert.match(
    urlGenerator("Standard", "itemoverview", "UniqueWeapon"),
    /^https:\/\/poe\.ninja\/poe1\/api\/economy\/stash\/current\/item\/overview\?/,
  );
  assert.match(
    urlGenerator("Standard", "exchangeoverview", "Oil"),
    /^https:\/\/poe\.ninja\/poe1\/api\/economy\/exchange\/current\/overview\?/,
  );
  assert.throws(() => urlGenerator("Standard", "bogus", "Oil"), ValidationError);
});

test("WatchUrlGenerator encodes a league containing a space and an &", () => {
  const url = watchUrlGenerator("Standard & Co", "currency");
  assert.strictEqual(
    url,
    "https://api.poe.watch/get?category=currency&league=Standard%20%26%20Co",
  );
});

test("fetchData rethrows ValidationError for an unknown typeName without hitting the network", async () => {
  // urlGenerator throws before axios.get is reached, so this makes no request.
  // Also forces dist/.../fetchData.js to load, catching a broken package.json require path.
  await assert.rejects(
    () => fetchData("Standard", "bogus", "Oil"),
    ValidationError,
  );
});
