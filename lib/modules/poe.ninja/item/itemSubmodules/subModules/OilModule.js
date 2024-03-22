const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling oils.
 * @extends ItemBaseClass
 */
class OilModule extends ItemBaseClass {
  /**
   * Creates an instance of OilModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Oil");
  }
}

module.exports = OilModule;
