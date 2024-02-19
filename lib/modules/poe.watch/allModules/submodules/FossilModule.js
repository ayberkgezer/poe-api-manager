const getData = require("../functions/getData");

class FossilModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `fossil${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = FossilModule;
