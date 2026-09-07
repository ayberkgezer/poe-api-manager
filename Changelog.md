# CHANGELOG
## [2.1.0](https://github.com/ayberkgezer/poe-api-manager/compare/v2.0.0...v2.1.0) (2026-09-07)


### Features

* add Path of Exile 2 support for poe.ninja and poe.watch ([910b5ae](https://github.com/ayberkgezer/poe-api-manager/commit/910b5aed45392f011dd700e1467d6cb5c5b46247))
* Path of Exile 2 support and structural cleanup ([844fd06](https://github.com/ayberkgezer/poe-api-manager/commit/844fd06f240a68260b5ba56977491e701a97dccc))


### Bug Fixes

* make release-please actually create releases ([ad195f9](https://github.com/ayberkgezer/poe-api-manager/commit/ad195f9e4ce3ad008e49a466ebee170b39ada480))
* make release-please create releases by pinning the component ([f8ae202](https://github.com/ayberkgezer/poe-api-manager/commit/f8ae202c4ae74dc48447515192972868c236d190))

## 2.0.0
- 💥[Breaking] poe.ninja removed its old `/api/data/*` endpoints; the library now
  targets the new `poe.ninja/poe1/api/economy/*` endpoints.
- 💥[Breaking] DeliriumOrb, DivinationCard, Essence, Fossil, Oil, Resonator,
  Scarab, Omen and AllflameEmber are now served by the new exchange endpoint,
  which adds/renames some value fields (e.g. `primaryValue`, conditional
  `chaosValue`).
- 💥[Breaking] `itemView.helmetEnchant` removed; poe.ninja removed it upstream.
- 💥[Breaking] Errors thrown by the library are now typed `ApiError` /
  `ValidationError` (with `statusCode` and `details`) instead of plain `Error`.
- 💥[Breaking] An unknown `type` on the exchange endpoint, and an invalid league
  name on the exchange and item endpoints, now resolve to an empty array
  instead of throwing — poe.ninja answers HTTP 200 with empty `lines` there.
  The currency endpoint still throws `ApiError` if the response omits
  `currencyDetails`.
- 💥[Breaking] Releases are now cut by pushing a `v*` git tag instead of
  automatically on every push to `main`.
- 🛠️[Fix] Publishing now uses npm trusted publishing (OIDC) instead of an
  `NPM_TOKEN` secret; npm permanently revoked classic tokens in February 2026.
- 🛠️[Fix] `mergeData` no longer silently drops currency lines it can't join.
- 🛠️[Fix] League/type values are now URL-encoded when building requests.
- 🚀[Added] `ApiError`, `ValidationError` and `CustomError` are now exported.

## 1.2.23
- 🛠️[Fix] Refactor exports to use export * syntax

## 1.2.22
- 🛠️[Fix] Quick fix error.

## 1.2.20
- 🚀[Added] CODE_OF_CONDUCT, CONTRIBUTING, and SECURITY policies.

## 1.2.19
- 🚀[Added] poe.watch API with the following features:
  - Unique Maps
  - Delirium Orb
  - Divination Card

## 1.2.18
- 🛠️[Fix] Quick fix poeWatch error.
- 🛠️[Fix] Quick fix folder structure.

## 1.2.17
- 🛠️[Fix] Quick fix github actions.

## 1.2.16
- 🛠️[Fix] Quick fix.

## 1.2.14
- 🚀[New] Publish jsr.

## 1.2.13
- 🛠️[Fix] Quick Fix.

## 1.2.12
- 🚀[New] I decided to develop the main project with Typescript language. From now on, development will only continue from here.
- 🛠️[Fix] Typescript uses.

## 1.2.9
- 🚀[Added] Allflame Embers added to itemview.

## 1.2.8
- 🚀[Added] Coffins added to itemview.
- 🛠️[Fix] Fix default value for typescript requestedProperties.
- 🛠️[Fix] Fix bun error.

## 1.2.2
- 🛠️ [Fixed] Control mechanisms in API calls have been improved for better error handling.
- 🔄 [Changed] Updated dependencies to their latest versions for improved security and performance.
- 🚀 [Added] `getQuickCurrency()` has been added to the Currency class.


## 1.2.1
- 🔄 [Update] Development was done with OOP. Classes have been changed.
  >There was no change in the scripts.
- 🚀[Added] Added `filterProperties()` to utils class.

## 1.0.0
- 🚀[New] utils class
- 🚀[New] utils `getLeagues`function. Get league name.
- 📝 [Update] The documentation has been updated.

## 0.2.8
- 🚀[Added] poe.watch API with `getCategory()` function.
- 🛠️ [Fixed] Typo in WatchAPI class
- 📝 [Update] The documentation has been updated.
## 0.2.6
- 🎨[Added] JSDocs for easy understanding.

## 0.2.2
- 🚀[Added] poe.watch API with `getData()` function.

## 0.1.0
- 🚀[Added] poe.ninja API with the following features:
    - Omens
    - Unique Relics
    - Cluster Jewels
    - Blighted Maps
    - Blight Ravaged Maps
    - Invitations
    - Memories

## 0.0.1 Publish
