import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling unique weapons.
 */
class UniqueWeaponModule extends PoeNinja {
  /**
   * Creates an instance of UniqueWeaponModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "UniqueWeapon";
    super(league, typeName, type);
  }
}

export default UniqueWeaponModule;
