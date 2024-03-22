const currencySubmodules = require("./currencySubmodules/CurrencySubModules");

/**
 * Represents a module for fetching currency overview data.
 *
 * @class
 */
class CurrencyWievModule {
  /**
   * Creates a new CurrencyWievModule instance.
   *
   * @constructor
   * @param {string} league - The name of the Path of Exile league.
   */
  constructor(league) {
    /**

    /**
     * Represents a module for fetching currency data.
     */
    this.currency = new currencySubmodules.CurrencyModule(league);

    /**
     * Represents a module for fetching fragment data.
     */
    this.fragment = new currencySubmodules.FragmentModule(league);
  }
}

// Export the CurrencyWievModule class
module.exports = CurrencyWievModule;
