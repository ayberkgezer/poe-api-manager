import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling incubators.
 */
class IncubatorModule extends PoeNinja {
  /**
   * Creates an instance of IncubatorModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Incubator";
    super(league, typeName, type);
  }
}

export default IncubatorModule;
