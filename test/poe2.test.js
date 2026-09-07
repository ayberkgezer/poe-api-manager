const { test } = require("node:test");
const assert = require("node:assert");

const urlGenerator2 = require("../dist/lib/modules/poe.ninja/poe2/urlGenerator2").default;
const watchUrlGenerator2 = require("../dist/lib/modules/poe.watch/poe2/watchUrlGenerator2").default;
const unwrapItems = require("../dist/lib/modules/poe.watch/poe2/unwrapItems").default;
const filterByCategory = require("../dist/lib/modules/poe.watch/poe2/filterByCategory").default;
const ApiError = require("../dist/lib/errors/ApiError").default;

test("urlGenerator2 builds the PoE2 exchange URL with a plural type and encodes the league", () => {
  const url = urlGenerator2("Runes of Aldur", "Currency", "exchange");
  assert.strictEqual(
    url,
    "https://poe.ninja/poe2/api/economy/exchange/current/overview?league=Runes%20of%20Aldur&type=Currency",
  );
});

test("urlGenerator2 builds the PoE2 stash item URL with a plural type", () => {
  const url = urlGenerator2("Standard & Co", "UniqueWeapons", "item");
  assert.strictEqual(
    url,
    "https://poe.ninja/poe2/api/economy/stash/current/item/overview?league=Standard%20%26%20Co&type=UniqueWeapons",
  );
});

test("watchUrlGenerator2 encodes the league and pins game=poe2", () => {
  const url = watchUrlGenerator2("Standard & Co");
  assert.strictEqual(
    url,
    "https://api.poe.watch/exchange/ratios?league=Standard%20%26%20Co&game=poe2",
  );
});

test("unwrapItems returns the items array from the {items:[...]} envelope", () => {
  const items = [{ id: 1, name: "Divine Orb" }];
  assert.deepStrictEqual(unwrapItems({ items }, { league: "Standard" }), items);
});

test("unwrapItems throws ApiError when items is missing", () => {
  assert.throws(() => unwrapItems({}, { league: "Standard" }), ApiError);
});

test("filterByCategory filters on the category field, not group", () => {
  // group deliberately disagrees with category: PoE1 filters on `group`, PoE2 on
  // `category`, and this fixture fails if the two are ever conflated.
  const items = [
    { name: "Divine Orb", category: "currency", group: "stackable" },
    { name: "Chest", category: "armour", group: "currency" },
  ];
  assert.deepStrictEqual(filterByCategory(items, "currency"), [items[0]]);
});
