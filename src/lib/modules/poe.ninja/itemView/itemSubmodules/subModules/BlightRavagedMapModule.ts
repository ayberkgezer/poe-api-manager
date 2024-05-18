import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling blighted ravaged maps.
 */
class BlightedRavagedMapModule extends PoeNinja {
  /**
   * Creates an instance of BlightedRavagedMapModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    // The type name.
    const type: string = "BlightedRavagedMap";
    super(league, typeName, type);
  }
}

export default BlightedRavagedMapModule;
