const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling essences.
 * @extends ItemBaseClass
 */
class EssenceModule extends ItemBaseClass {
  /**
   * Creates an instance of EssenceModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Essence");
  }
}

module.exports = EssenceModule;
