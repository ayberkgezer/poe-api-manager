const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling unique accessories.
 * @extends ItemBaseClass
 */
class UniqueAccessoryModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueAccessoryModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "UniqueAccessory");
  }
}

module.exports = UniqueAccessoryModule;
