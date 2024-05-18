import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling beasts.
 */
class BeastModule extends PoeNinja {

  /**
   * Creates an instance of BeastModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    // The type name.
    const type: string = "Beast";
    super(league, typeName, type);
  }
}

export default BeastModule;
