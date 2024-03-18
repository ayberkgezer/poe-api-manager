const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling vials.
 * @extends ItemBaseClass
 */
class VialsModule extends ItemBaseClass {
  /**
   * Creates an instance of VialsModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Vial");
  }
}

module.exports = VialsModule;
