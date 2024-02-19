const getData = require("../functions/getData");

class WeaponModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `weapon${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = WeaponModule;
