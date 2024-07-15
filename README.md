# poe-api-manager

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ayberkgezer/poe-api-manager)
![GitHub top language](https://img.shields.io/github/languages/top/ayberkgezer/poe-api-manager?logo=typescript)
[![ISSUES](https://img.shields.io/github/issues/ayberkgezer/poe-api-manager-ts)](https://github.com/ayberkgezer/poe-api-manager/issues)
![NPM Downloads](https://img.shields.io/npm/dt/poe-api-manager?logo=npm)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ayberkgezer/poe-api-manager/build.yml)


- [Introduction](#introduction)
- [Overview](#overview)
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [poe.ninja](#ninjaapi)
    - [currencyView](#currencyview)
    - [itemView](#itemview)
  - [poe.watch](#watchapi)
    - [view](#view)
  - [utils](#utils)
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
- Omens
- Unique Relics
- Cluster Jewels
- Blighted Maps
- Blight Ravaged Maps
- Invitations
- Memories
- Coffins
- Allflame Embers

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

- getData() => function returns data purely.
```javascript
//Example Currency
watchAPI.view.baseType.getData().then((data) => {
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
## Utils
Utils class is a class that contains some auxiliary tools.
```javascript
const { Utils } = require("poe-api-manager");
const utils = new Utils();
```
- getLeagues() => Returns available league names.

```javascript
utils.getLeagues().then((data) => {
  console.log(data);
});
```

- filterProperties(data, properties) => It is used to filter data.

```javascript
utils.filterProperties(data, ["currencyTypeName", "chaosEquivalent"])
  .then((result) => console.log(result));
```


## Examples
```javascript
const { NinjaAPI , WatchAPI } = require("poe-api-manager");

// Create NinjaAPI
const ninjaAPI = new NinjaAPI("Affliction");
//Create WatchAPI
const watchAPI = new WatchAPI("Affliction")

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
const ninjaAPI = new NinjaAPI("Affliction");
//Create WatchAPI
const watchAPI = new WatchAPI("Affliction")

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
