const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling base types.
 * @extends ItemBaseClass
 */
class AllflameEmberModule extends ItemBaseClass {
  /**
   * Creates an instance of AllflameEmber.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "AllflameEmber");
  }
}

module.exports = AllflameEmberModule;
