const getData = require("../functions/getData");

class SextantModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `sextants${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = SextantModule;
