const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling helmet enchants.
 * @extends ItemBaseClass
 */
class HelmetEnchantModule extends ItemBaseClass {
  /**
   * Creates an instance of HelmetEnchantModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "HelmetEnchant");
  }
}

module.exports = HelmetEnchantModule;
