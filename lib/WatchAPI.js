const WatchWievModule = require("./modules/poe.watch/WatchWievModule");

class WatchAPI {
  #league;
  #leagueUrl;
  constructor(league) {
    this.#league = league;
    this.#leagueUrl = `&league=${this.#league}`;
    this.wiev = new WatchWievModule(this.#leagueUrl);
  }
}
module.exports = WatchAPI;
