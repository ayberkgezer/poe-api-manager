const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling skill gems.
 * @extends ItemBaseClass
 */
class SkillGemModule extends ItemBaseClass {
  /**
   * Creates an instance of SkillGemModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "SkillGem");
  }
}

module.exports = SkillGemModule;
