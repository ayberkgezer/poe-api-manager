import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling vials.
 */
class VialsModule extends PoeNinja {
  /**
   * Creates an instance of VialsModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Vial";
    super(league, typeName, type);
  }
}

export default VialsModule;
