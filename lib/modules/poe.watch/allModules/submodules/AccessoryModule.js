const getData = require("../functions/getData");

class AccessoryModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `accessory${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = AccessoryModule;
