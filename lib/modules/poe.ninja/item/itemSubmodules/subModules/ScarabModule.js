const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling scarabs.
 * @extends ItemBaseClass
 */
class ScarabModule extends ItemBaseClass {
  /**
   * Creates an instance of ScarabModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Scarab");
  }
}

module.exports = ScarabModule;
