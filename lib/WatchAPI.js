const WatchWievModule = require("./modules/poe.watch/WatchWievModule");

/**
 * Represents an API for interacting with a poe.watch service.
 *
 * @class
 */
class WatchAPI {
  /**
   * Creates an instance of WatchAPI.
   *
   * @param {string} league - The league for which the API should be initialized.
   */
  constructor(league) {
    /**
     * The WatchWievModule instance associated with this API.
     *
     * @type {WatchWievModule}
     */
    this.view = new WatchWievModule(league);
  }
}

module.exports = WatchAPI;
