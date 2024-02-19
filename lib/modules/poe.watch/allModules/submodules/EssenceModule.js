const getData = require("../functions/getData");

class EssenceModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `essence${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = EssenceModule;
