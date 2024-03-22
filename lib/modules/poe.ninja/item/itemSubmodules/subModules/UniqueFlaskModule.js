const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling unique flasks.
 * @extends ItemBaseClass
 */
class UniqueFlaskModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueFlaskModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "UniqueFlask");
  }
}

module.exports = UniqueFlaskModule;
