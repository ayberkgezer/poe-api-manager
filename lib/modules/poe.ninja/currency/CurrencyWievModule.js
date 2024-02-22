const currencySubmodules = require("./currencySubmodules/CurrencySubModules");
const baseurl = require("../../../config/poeNinja/url");

/**
 * Represents a module for viewing currency-related information in a specific Path of Exile league.
 * @class
 */
class CurrencyWievModule {
  #league; // eslint-disable-line
  #baseurl; // eslint-disable-line
  /**
   * Creates a new instance of CurrencyWievModule.
   * @constructor
   * @param {string} league - The Path of Exile league for which the currency information is retrieved.
   */
  constructor(league) {
    /**
     * @type {string} #league - The Path of Exile league for which the currency information is retrieved.
     * @private
     */
    this.#league = league;

    /**
     * @type {string} #baseurl - The base URL for the Path of Exile Ninja API.
     * @private
     */
    this.#baseurl = baseurl.baseurl;

    /**
     * @type {string} url - The complete URL for retrieving currency information for the specified league.
     * @private
     */
    const url = `${this.#baseurl}currencyoverview?league=${this.#league}&type=`;

    /**
     * @type {CurrencyModule} currency - The submodule for currency information.
     */
    this.currency = new currencySubmodules.CurrencyModule(url);

    /**
     * @type {FragmentModule} fragment - The submodule for fragment information.
     */
    this.fragment = new currencySubmodules.FragmentModule(url);
  }
}

// Export the CurrencyWievModule class.
module.exports = CurrencyWievModule;
