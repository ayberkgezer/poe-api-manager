import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling resonators.
 */
class ResonatorModule extends PoeNinja {
  /**
   * Creates an instance of ResonatorModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Resonator";
    super(league, typeName, type);
  }
}

export default ResonatorModule;
