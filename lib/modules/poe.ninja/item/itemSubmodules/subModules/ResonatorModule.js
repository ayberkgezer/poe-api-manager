const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling resonators.
 * @extends ItemBaseClass
 */
class ResonatorModule extends ItemBaseClass {
  /**
   * Creates an instance of ResonatorModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Resonator");
  }
}

module.exports = ResonatorModule;
