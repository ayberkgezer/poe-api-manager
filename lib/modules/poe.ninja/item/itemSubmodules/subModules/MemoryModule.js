const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling memories.
 * @extends ItemBaseClass
 */
class MemoryModule extends ItemBaseClass {
  /**
   * Creates an instance of MemoryModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "Memory");
  }
}

module.exports = MemoryModule;
