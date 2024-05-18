import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling base types.
 */
class BaseTypeModule extends PoeNinja {
  /**
   * Creates an instance of BaseTypeModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    // The type name.
    const type: string = "BaseType";
    super(league, typeName, type);
  }
}

export default BaseTypeModule;
