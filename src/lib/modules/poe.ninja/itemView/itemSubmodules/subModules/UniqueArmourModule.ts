import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling unique armours.
 */
class UniqueArmourModule extends PoeNinja {
  /**
   * Creates an instance of UniqueArmourModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "UniqueArmour";
    super(league, typeName, type);
  }
}

export default UniqueArmourModule;
