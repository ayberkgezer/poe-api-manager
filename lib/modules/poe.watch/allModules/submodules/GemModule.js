const getData = require("../functions/getData");

class GemModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `gem${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = GemModule;
