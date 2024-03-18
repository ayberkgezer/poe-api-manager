const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling blighted ravaged maps.
 * @extends ItemBaseClass
 */
class BlightedRavagedMapModule extends ItemBaseClass {
  /**
   * Creates an instance of BlightedRavagedMapModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "BlightedRavagedMap");
  }
}

module.exports = BlightedRavagedMapModule;
