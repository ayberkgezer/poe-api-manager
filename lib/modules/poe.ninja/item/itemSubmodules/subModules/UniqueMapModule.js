const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling unique maps.
 * @extends ItemBaseClass
 */
class UniqueMapModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueMapModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "UniqueMap");
  }
}

module.exports = UniqueMapModule;
