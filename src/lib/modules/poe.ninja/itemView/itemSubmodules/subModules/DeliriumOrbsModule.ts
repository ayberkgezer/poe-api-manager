import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling delirium orbs.
 */
class DeliriumOrbsModule extends PoeNinja {
  /**
   * Creates an instance of DeliriumOrbsModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "DeliriumOrb";
    super(league, typeName, type);
  }
}

export default DeliriumOrbsModule;
