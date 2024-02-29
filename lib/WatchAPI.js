const WatchWievModule = require("./modules/poe.watch/WatchWievModule");

/**
 * Represents an API for interacting with a poe.watch service.
 *
 * @class
 */
class WatchAPI {
  /**
   * The league for which the API is initialized.
   *
   * @private
   * @type {string}
   */
  #league;

  /**
   * The URL parameter for the league in the Path of Exile.
   *
   * @private
   * @type {string}
   */
  #leagueUrl;

  /**
   * Creates an instance of WatchAPI.
   *
   * @param {string} league - The league for which the API should be initialized.
   */
  constructor(league) {
    /**
     * The league for which the API is initialized.
     *
     * @private
     * @type {string}
     */
    this.#league = league;

    /**
     * The URL parameter for the league in the Path of Exile watch service.
     *
     * @private
     * @type {string}
     */
    this.#leagueUrl = `&league=${this.#league}`;

    /**
     * The WatchWievModule instance associated with this API.
     *
     * @type {WatchWievModule}
     */
    this.view = new WatchWievModule(this.#leagueUrl);
  }
}

module.exports = WatchAPI;
