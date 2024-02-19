const getData = require("../functions/getData");

class InvitationModule {
  #queryUrl;
  constructor(leagueUrl) {
    this.#queryUrl = `invitation${leagueUrl}`;
  }
  async getData(requestedProperties) {
    return getData(this.#queryUrl, requestedProperties);
  }
}

module.exports = InvitationModule;
