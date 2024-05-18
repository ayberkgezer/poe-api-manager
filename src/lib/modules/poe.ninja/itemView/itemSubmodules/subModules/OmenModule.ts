import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling omens.
 */
class OmenModule extends PoeNinja {
  /**
   * Creates an instance of OmenModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Omen";
    super(league, typeName, type);
  }
}

export default OmenModule;
