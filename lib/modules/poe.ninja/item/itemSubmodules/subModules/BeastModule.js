const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling beasts.
 * @extends ItemBaseClass
 */
class BeastModule extends ItemBaseClass {
  /**
   * Creates an instance of BeastModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    /**
     * The name of the beast type.
     * @type {string}
     */
    const typeName = "Beast";
    super(league, typeName);
  }
}

module.exports = BeastModule;
