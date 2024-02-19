const getData = require("../functions/getData");

class OilModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `oil${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = OilModule;
