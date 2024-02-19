const getData = require("../functions/getData");

class FlaskModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `flask${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = FlaskModule;
