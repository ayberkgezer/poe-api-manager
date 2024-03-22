const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling maps.
 * @extends ItemBaseClass
 */
class MapModule extends ItemBaseClass {
  /**
   * Creates an instance of MapModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Map");
  }
}

module.exports = MapModule;
