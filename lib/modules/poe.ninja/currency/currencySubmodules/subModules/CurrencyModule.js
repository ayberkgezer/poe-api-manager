const CurrencyBaseClass = require("../../CurrencyBaseClass");

/**
 * Represents a module for interacting with currency data.
 * @extends CurrencyBaseClass
 */
class CurrencyModule extends CurrencyBaseClass {
  /**
   * Constructs a new CurrencyModule instance.
   * @param {string} league - The league name for which currency data is requested.
   */
  constructor(league) {
    super(league, "Currency");
  }
}

module.exports = CurrencyModule;
