const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling beasts.
 * @extends ItemBaseClass
 */
class BeastModule extends ItemBaseClass {
  /**
   * Creates an instance of BeastModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Beast");
  }
}

module.exports = BeastModule;
