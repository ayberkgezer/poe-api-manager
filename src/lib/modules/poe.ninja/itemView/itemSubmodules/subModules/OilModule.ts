import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling oils.
 */
class OilModule extends PoeNinja {
  /**
   * Creates an instance of OilModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Oil";
    super(league, typeName, type);
  }
}

export default OilModule;
