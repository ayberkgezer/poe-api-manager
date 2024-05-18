import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling scarabs.
 */
class ScarabModule extends PoeNinja {
  /**
   * Creates an instance of ScarabModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Scarab";
    super(league, typeName, type);
  }
}

export default ScarabModule;
