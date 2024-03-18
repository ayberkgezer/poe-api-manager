const ItemBaseClass = require("../../ItemBaseClass");
/**
 * Represents a module for handling unique weapons.
 * @extends ItemBaseClass
 */
class UniqueWeaponModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueWeaponModule.
   * @param {string} league - The league name.
   */
  constructor(league) {
    super(league, "UniqueWeapon");
  }
}

module.exports = UniqueWeaponModule;
