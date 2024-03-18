const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling cluster jewels.
 * @extends ItemBaseClass
 */
class ClusterJewelModule extends ItemBaseClass {
  /**
   * Creates an instance of ClusterJewelModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "ClusterJewel");
  }
}

module.exports = ClusterJewelModule;
