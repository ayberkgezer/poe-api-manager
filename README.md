# poe-economy-manager

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Version](https://img.shields.io/github/package-json/v/ayberkgezer/poe-economy-manager)
![GitHub top language](https://img.shields.io/github/languages/top/ayberkgezer/poe-economy-manager?logo=javascript)
[![ISSUES](https://img.shields.io/github/issues/ayberkgezer/poe-economy-manager)](https://github.com/ayberkgezer/poe-economy-manager/issues)

- [Introduction](#introduction)
- [Overwiev](#overwiev)
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [currencyWiev](#currencywiev)
  - [itemWiev](#itemwiev)
- [Changelog](https://github.com/ayberkgezer/poe-economy-manager/blob/main/Changelog.md)
- [Examples](#examples)



## Introduction
The purpose of this library is to make the economic data in the Path of Exile game easily usable.

>Important!: For economy, it is taken from the poe.ninja website. (for now)

> Note: This product is in no way affiliated with or endorsed by Grinding Gear Games and poe.ninja.

## Overwiev

There are two types of usage for Poe: [currencywiev](#currencywiev) and [itemwiev](#itemwiev).

## Installation
**Install with npm:**
```bash
$ npm install poe-economy-manager
```

## Getting Started
```javascript
const NinjaAPI = require("poe-economy-manager");

const ninjaAPI = new NinjaAPI("League-Name");
```

### currencyWiev
What we can get here is as follows.
- Currency
- Fragment

getData() => function returns data purely.
```javascript
//Example Currency
ninjaAPI.currencyWiev.currency.getData().then((data) => {
  console.log(data);
});
```
getdata(requestedProperties) => The function filters the data as desired.
>Note: Enter [poe.ninja Document](https://github.com/ayberkgezer/poe.ninja-API-Document?tab=readme-ov-file#poeninja-api) to access the values for the filter.
```javascript
//Filtered data is returned
ninjaAPI.currencyWiev.currency.getData(["id", "name", "icon"]).then((data) => {
  console.log(data);
});
```
### itemWiev
What we can get here is as follows.
- BaseType
- Beast
- Delirium Orbs
- Divination Cards
- Essences
- Fossils
- Helment Enchant
- Incubators
- Maps
- Oils
- Resanators
- Scarabs
- Skill Gems
- Unique Accessories
- Unique Armours
- Unique Flask
- Unique Jewels
- Unique Maps
- Unique Weapons
- Vials

getData() => function returns data purely.
```javascript
//Example BaseType
ninjaAPI.itemWiev.baseType.getData().then((data) => {
  console.log(data);
});
```
getdata(requestedProperties) => The function filters the data as desired.
>Note: Enter [poe.ninja Document](https://github.com/ayberkgezer/poe.ninja-API-Document?tab=readme-ov-file#poeninja-api) to access the values for the filter.
```javascript
//Filtered data is returned
ninjaAPI.itemWiev.baseType.getData(["id", "name", "icon"]).then((data) => {
  console.log(data);
});
```

## Examples
```javascript
const NinjaAPI = require("poe-economy-manager");

// Create NinjaAPI
const ninjaAPI = new NinjaAPI("Affliction");

//We entered the filter data
const requestedProperties = ["id", "name", "icon"];

//filtered BaseType data
ninjaAPI.itemwiev.baseType.getData(requestedProperties).then((data) => {
  console.log(data);
});

//filtered Currency data
ninjaAPI.currencyWiev.currency.getData(requestedProperties).then((data) => {
  console.log(data);
});
```

```javascript
const NinjaAPI = require("poe-economy-manager");

// Create NinjaAPI
const ninjaAPI = new NinjaAPI("Affliction");

const requestedProperties = ["id", "name", "icon"];

//Using await in an async function
const fetchData = async () => {
  try {
    //Oil Data
    const oilData = await ninjaAPI.item.oil.getData(requestedProperties);

    console.log("Oil Data:", oilData);

    //Currency Data
    const currencyData = await ninjaAPI.currencyWiev.currency.getData(requestedProperties);

    console.log("Currency Data:", currencyData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```