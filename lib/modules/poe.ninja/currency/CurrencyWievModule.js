const currencySubmodules = require("./currencySubmodules/CurrencySubModules");
const baseurl = require("../../../config/poeNinja/url");

/**
 * Represents a module for fetching currency overview data.
 *
 * @class
 */
class CurrencyWievModule {
  #league;
  #baseurl;
  /**
   * Creates a new CurrencyWievModule instance.
   *
   * @constructor
   * @param {string} league - The name of the Path of Exile league.
   */
  constructor(league) {
    /**
     * The league for which the currency overview data is fetched.
     *
     * @private
     * @type {string}
     */
    this.#league = league;

    /**
     * The base URL for fetching currency overview data.
     *
     * @private
     * @type {string}
     */
    this.#baseurl = baseurl.baseurl;

    /**
     * The URL for currency overview data specific to the league.
     *
     * @private
     * @type {string}
     */
    const url = `${this.#baseurl}currencyoverview?league=${this.#league}&type=`;

    /**
     * Represents a module for fetching currency data.
     */
    this.currency = new currencySubmodules.CurrencyModule(url);

    /**
     * Represents a module for fetching fragment data.
     */
    this.fragment = new currencySubmodules.FragmentModule(url);
  }
}

// Export the CurrencyWievModule class
module.exports = CurrencyWievModule;
