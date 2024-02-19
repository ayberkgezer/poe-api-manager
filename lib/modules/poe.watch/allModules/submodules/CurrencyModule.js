const getData = require("../functions/getData");

class CurrencyModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `currency${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}
// export CurrencyModule;
module.exports = CurrencyModule;
