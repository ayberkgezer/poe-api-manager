const getData = require("../functions/getData");

class BeastModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `beast${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = BeastModule;
