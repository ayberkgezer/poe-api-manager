const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling omens.
 * @extends ItemBaseClass
 */
class OmenModule extends ItemBaseClass {
  /**
   * Creates an instance of OmenModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Omen");
  }
}

module.exports = OmenModule;
