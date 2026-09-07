# poe-api-manager

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ayberkgezer/poe-api-manager)
![GitHub top language](https://img.shields.io/github/languages/top/ayberkgezer/poe-api-manager?logo=typescript)
[![ISSUES](https://img.shields.io/github/issues/ayberkgezer/poe-api-manager)](https://github.com/ayberkgezer/poe-api-manager/issues)
[![npm](https://img.shields.io/npm/v/poe-api-manager?logo=npm)](https://www.npmjs.com/package/poe-api-manager)
![NPM Downloads](https://img.shields.io/npm/dt/poe-api-manager?logo=npm)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ayberkgezer/poe-api-manager/ci.yml)


- [Introduction](#introduction)
- [Overview](#overview)
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [poe.ninja](#ninjaapi)
    - [currencyView](#currencyview)
    - [itemView](#itemview)
  - [poe.watch](#watchapi)
    - [view](#view)
  - [Path of Exile 2](#poe2ninjaapi)
    - [Poe2NinjaAPI](#poe2ninjaapi)
    - [Poe2WatchAPI](#poe2watchapi)
  - [utils](#utils)
- [Error handling](#error-handling)
- [Releasing](#releasing)
- [Changelog](https://github.com/ayberkgezer/poe-api-manager/blob/main/Changelog.md)
- [Examples](#examples)



## Introduction
The purpose of this library is to make the economic data in the Path of Exile game easily usable. This library is written in typescript.

>Important!: For economy, it is taken from the poe.ninja and poe.watch

> Note: This product is in no way affiliated with or endorsed by Grinding Gear Games, poe.ninja and poe.watch.

## Overview

Permission to access two different services. poe.ninja and poe.watch

## Installation
**Install with npm:**
```bash
$ npm i poe-api-manager
```
**Install with bun:**
```bash
$ bun i poe-api-manager
```

## Getting Started

### ninjaAPI
```javascript
const { NinjaAPI } = require("poe-api-manager");

const ninjaAPI = new NinjaAPI("League-Name");
```

#### currencyView
What we can get here is as follows.
- Currency
- Fragment

- getData() => function returns data purely.
```javascript
//Example Currency
ninjaAPI.currencyView.currency.getData().then((data) => {
  console.log(data);
});
```
- getData(requestedProperties) => The function filters the data as desired.
>Note: Enter [poe.ninja Document](https://github.com/ayberkgezer/poe.ninja-API-Document?tab=readme-ov-file#poeninja-api) to access the values for the filter.
```javascript
//Filtered data is returned
ninjaAPI.currencyView.currency.getData(["id", "name", "icon"]).then((data) => {
  console.log(data);
});
```
- getQuickCurrency() => This function returns the chaos value from the currency name. It returns "Divine Orb" chaos as the default value. currencyTypeName default "Divine Orb"
```javascript
ninjaAPI.currencyView.currency.getQuickCurrency(currencyTypeName).then((data)=> {
  console.log(data);
});
```

#### itemView
What we can get here is as follows.
- BaseType
- Beast
- Delirium Orbs *(exchange)*
- Divination Cards *(exchange)*
- Essences *(exchange)*
- Fossils *(exchange)*
- Incubators
- Maps
- Oils *(exchange)*
- Resonators *(exchange)*
- Scarabs *(exchange)*
- Skill Gems
- Unique Accessories
- Unique Armours
- Unique Flasks
- Unique Jewels
- Unique Maps
- Unique Weapons
- Vials
- Omens *(exchange)*
- Memories
- Invitations
- Unique Relics
- Cluster Jewels
- Blighted Maps
- Blight Ravaged Maps
- Coffins
- Allflame Embers *(exchange)*

> *(exchange)* means poe.ninja serves this type from its exchange endpoint instead
> of the stash endpoint. The data shape is normalized to the same `{id, name, icon}`
> contract as everything else, with an added `chaosValue` where applicable.

- getData() => function returns data purely.
```javascript
//Example BaseType
ninjaAPI.itemView.baseType.getData().then((data) => {
  console.log(data);
});
```
- getdata(requestedProperties) => The function filters the data as desired.
>Note: Enter [poe.ninja Document](https://github.com/ayberkgezer/poe.ninja-API-Document?tab=readme-ov-file#poeninja-api) to access the values for the filter.
```javascript
//Filtered data is returned
ninjaAPI.itemView.baseType.getData(["id", "name", "icon"]).then((data) => {
  console.log(data);
});
```
### watchAPI
```javascript
const { WatchAPI } = require("poe-api-manager");

const watchAPI = new WatchAPI("League-Name");
```
#### view
What we can get here is as follows.
- Currency
- Essences
- Fossil
- Fragment
- Gem
- Invitation
- Jewel
- Map
- Oil
- Scarab
- Sextant
- Accessory
- Armour
- Weapon
- Flask
- Base
- Beast
- Unique Maps
- Delirium Orb
- Divination Card

- getData() => function returns data purely.
```javascript
//Example Currency
watchAPI.view.currency.getData().then((data) => {
  console.log(data);
});
```
> Enter [poe.watch Document](https://docs.poe.watch/#get-all-armours) to access the values for the filter.

- getdata(requestedProperties) => The function filters the data as desired.
```javascript
//Filtered data is returned
watchAPI.view.currency.getData(["id", "name", "icon"]).then((data) => {
  console.log(data);
});
```
- getCategory("categoryName") => The function quickly filters through specific categories.

> Note: Used in accessory, armour, base, gem and weapon.

```javascript
//Returns the chest category in Armor.
watchAPI.view.armour.getCategory("chest").then((data) => {
  console.log(data);
});
```

### Poe2NinjaAPI
```javascript
const { Poe2NinjaAPI } = require("poe-api-manager");

const ninja2 = new Poe2NinjaAPI("League-Name");
```
> Note: PoE2 economy data is empty on the "Standard" league (HTTP 200, 0 rows).
> Use an active league - discoverable via [`Utils.getPoe2Leagues()`](#utils).

#### exchange
poe.ninja PoE2 only has an exchange endpoint - **there is no PoE2 stash
currency endpoint**, so currency is served from here too.
- Currency
- Fragments
- Abyss
- UncutGems
- LineageSupportGems
- Essences
- SoulCores
- Idols
- Runes
- Ritual
- Expedition
- Delirium
- Breach
- Verisium

```javascript
ninja2.exchange.currency.getData(["id", "name", "icon"]).then((data) => {
  console.log(data);
});
```
> PoE2 exchange values are denominated in **divine**, not chaos: rows carry a
> `primaryValue` (`core.primary === "divine"`) and no `chaosValue` field,
> unlike the PoE1 exchange types above.

#### itemView
The PoE2 stash item types.
- UniqueWeapons
- UniqueArmours
- UniqueAccessories
- UniqueFlasks
- UniqueCharms
- UniqueJewels
- UniqueSanctumRelics
- UniqueTablets
- PrecursorTablets

```javascript
ninja2.itemView.uniqueWeapons.getData(["id", "name", "icon"]).then((data) => {
  console.log(data);
});
```

### Poe2WatchAPI
```javascript
const { Poe2WatchAPI } = require("poe-api-manager");

const watch2 = new Poe2WatchAPI("League-Name");
```
poe.watch exposes exactly one PoE2 endpoint - exchange ratios - so `exchange`
is the only property here.
```javascript
watch2.exchange.getData(["name", "category"]).then((data) => {
  console.log(data);
});
```
- getCategory("categoryName") => Filters by the `category` field (e.g. "currency").
> Note: unlike PoE1's `getCategory` (which filters on `group`), the PoE2 ratios
> response uses a `category` field instead.
```javascript
watch2.exchange.getCategory("currency").then((data) => {
  console.log(data);
});
```

## Utils
Utils class is a class that contains some auxiliary tools.
```javascript
const { Utils } = require("poe-api-manager");
const utils = new Utils();
```
- getLeagues() => Returns available league names. PoE1-only, sourced from poe.watch.

```javascript
utils.getLeagues().then((data) => {
  console.log(data);
});
```

- getPoe1Leagues() / getPoe2Leagues() => Returns available league names, sourced from poe.ninja.

```javascript
utils.getPoe1Leagues().then((data) => {
  console.log(data);
});

utils.getPoe2Leagues().then((data) => {
  console.log(data);
});
```

- filterProperties(data, properties) => It is used to filter data.

```javascript
utils.filterProperties(data, ["currencyTypeName", "chaosEquivalent"])
  .then((result) => console.log(result));
```

## Error handling
Errors thrown by this library are `ApiError` / `ValidationError` (both extend
`CustomError`), carrying a `statusCode` and optional `details`.
```javascript
const { NinjaAPI, ApiError } = require("poe-api-manager");

const ninjaAPI = new NinjaAPI("Standard");

try {
  await ninjaAPI.currencyView.currency.getData();
} catch (err) {
  if (err instanceof ApiError) {
    console.error(err.statusCode, err.message, err.details);
  }
}
```

## Releasing
Releases are automated by [release-please](https://github.com/googleapis/release-please)
from conventional commits: a `feat:`/`fix:` commit on `main` opens a release
PR, and merging that PR is what publishes to npm and creates the tag and
GitHub release. See [CONTRIBUTING.md](CONTRIBUTING.md#releasing) for the full
detail.

## Examples
```javascript
const { NinjaAPI , WatchAPI } = require("poe-api-manager");

// Create NinjaAPI
const ninjaAPI = new NinjaAPI("Standard");
//Create WatchAPI
const watchAPI = new WatchAPI("Standard")

//We entered the filter data
const requestedProperties = ["id", "name", "icon"];

//filtered BaseType data ninjaAPI
ninjaAPI.itemView.baseType.getData(requestedProperties).then((data) => {
  console.log(data);
});

//filtered Currency data ninjaAPI
ninjaAPI.currencyView.currency.getData(requestedProperties).then((data) => {
  console.log(data);
});

// filtered Scarab data watchAPI
watchAPI.view.scarab.getData(requestedProperties).then((data) => {
  console.log(data);
});
```

```javascript
const { NinjaAPI , WatchAPI } = require("poe-api-manager");

// Create NinjaAPI
const ninjaAPI = new NinjaAPI("Standard");
//Create WatchAPI
const watchAPI = new WatchAPI("Standard")

const requestedProperties = ["id", "name", "icon"];

//Using await in an async function
const fetchData = async () => {
  try {
    //Oil Data poe.ninja
    const oilData = await ninjaAPI.itemView.oil.getData(requestedProperties);


    console.log("poe.ninja Oil Data:", oilData);

    //Currency Data poe.ninja
    const currencyData = await ninjaAPI.currencyView.currency.getData(requestedProperties);

    console.log("poe.ninja Currency Data:", currencyData);

    //Scarab Data poe.watch
    const scarabData = await watchAPI.view.scarab.getData(requestedProperties)

    console.log("poe.watch Scarab Data", scarabData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```
