const getData = require("../functions/getData");

class FragmentModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `fragment${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = FragmentModule;
