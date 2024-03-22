const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling unique relics.
 * @extends ItemBaseClass
 */
class UniqueRelicModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueRelicModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "UniqueRelic");
  }
}

module.exports = UniqueRelicModule;
