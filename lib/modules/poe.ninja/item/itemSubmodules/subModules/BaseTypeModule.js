const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling base types.
 * @extends ItemBaseClass
 */
class BaseTypeModule extends ItemBaseClass {
  /**
   * Creates an instance of BaseTypeModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "BaseType");
  }
}

module.exports = BaseTypeModule;
