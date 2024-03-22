const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling unique armours.
 * @extends ItemBaseClass
 */
class UniqueArmourModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueArmourModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "UniqueArmour");
  }
}

module.exports = UniqueArmourModule;
