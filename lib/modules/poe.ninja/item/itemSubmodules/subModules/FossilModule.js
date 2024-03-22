const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling fossils.
 * @extends ItemBaseClass
 */
class FossilModule extends ItemBaseClass {
  /**
   * Creates an instance of FossilModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Fossil");
  }
}

module.exports = FossilModule;
