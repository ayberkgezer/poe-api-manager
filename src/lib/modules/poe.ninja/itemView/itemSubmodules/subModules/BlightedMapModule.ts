import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling blighted maps.
 */
class BlightedMapModule extends PoeNinja {
  /**
   * Creates an instance of BlightedMapModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    // The type name.
    const type: string = "BlightedMap";
    super(league, typeName, type);
  }
}

export default BlightedMapModule;
