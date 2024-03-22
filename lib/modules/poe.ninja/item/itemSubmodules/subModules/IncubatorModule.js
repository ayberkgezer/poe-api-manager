const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling incubators.
 * @extends ItemBaseClass
 */
class IncubatorModule extends ItemBaseClass {
  /**
   * Creates an instance of IncubatorModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Incubator");
  }
}

module.exports = IncubatorModule;
