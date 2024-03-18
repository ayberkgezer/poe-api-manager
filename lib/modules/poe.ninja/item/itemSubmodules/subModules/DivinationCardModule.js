const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling divination cards.
 * @extends ItemBaseClass
 */
class DivinationCardModule extends ItemBaseClass {
  /**
   * Creates an instance of DivinationCardModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "DivinationCard");
  }
}

module.exports = DivinationCardModule;
