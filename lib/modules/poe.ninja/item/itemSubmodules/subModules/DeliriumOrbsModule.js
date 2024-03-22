const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling delirium orbs.
 * @extends ItemBaseClass
 */
class DeliriumOrbsModule extends ItemBaseClass {
  /**
   * Creates an instance of DeliriumOrbsModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "DeliriumOrb");
  }
}

module.exports = DeliriumOrbsModule;
