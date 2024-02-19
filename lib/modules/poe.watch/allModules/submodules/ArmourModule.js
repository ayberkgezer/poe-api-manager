const getData = require("../functions/getData");

class ArmourModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `armour${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = ArmourModule;
