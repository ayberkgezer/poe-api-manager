const getData = require("../functions/getData");

class JewelModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `jewel${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = JewelModule;
