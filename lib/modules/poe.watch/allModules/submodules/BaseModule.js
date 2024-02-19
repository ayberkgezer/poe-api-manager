const getData = require("../functions/getData");

class BaseModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `bases${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = BaseModule;
