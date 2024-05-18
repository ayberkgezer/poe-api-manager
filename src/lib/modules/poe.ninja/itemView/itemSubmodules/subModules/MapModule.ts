import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling maps.
 */
class MapModule extends PoeNinja {
  /**
   * Creates an instance of MapModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Map";
    super(league, typeName, type);
  }
}

export default MapModule;
