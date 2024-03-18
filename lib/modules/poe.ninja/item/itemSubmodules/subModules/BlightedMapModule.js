const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling blighted maps.
 * @extends ItemBaseClass
 */
class BlightedMapModule extends ItemBaseClass {
  /**
   * Creates an instance of BlightedMapModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "BlightedMap");
  }
}

module.exports = BlightedMapModule;
