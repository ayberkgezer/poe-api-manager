const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling unique jewels.
 * @extends ItemBaseClass
 */
class UniqueJewelModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueJewelModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "UniqueJewel");
  }
}

module.exports = UniqueJewelModule;
