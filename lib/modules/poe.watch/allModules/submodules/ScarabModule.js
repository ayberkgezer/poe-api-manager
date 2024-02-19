const getData = require("../functions/getData");

class ScarabModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `scarab${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = ScarabModule;
