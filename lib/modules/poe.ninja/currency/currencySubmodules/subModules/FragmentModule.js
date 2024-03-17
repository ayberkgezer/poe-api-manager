const CurrencyBaseClass = require("../../CurrencyBaseClass");

/**
 * Represents a module for interacting with fragment currency data.
 * @extends CurrencyBaseClass
 */
class FragmentModule extends CurrencyBaseClass {
  /**
   * Constructs a new FragmentModule instance.
   * @param {string} league - The league name for which fragment currency data is requested.
   */
  constructor(league) {
    super(league, "Fragment");
  }
}

module.exports = FragmentModule;
