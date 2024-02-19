const getData = require("../functions/getData");

class MapModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `map${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = MapModule;
