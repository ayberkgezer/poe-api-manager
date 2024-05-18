import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling unique accessories.
 */
class UniqueAccessoryModule extends PoeNinja {
  /**
   * Creates an instance of UniqueAccessoryModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "UniqueAccessory";
    super(league, typeName, type);
  }
}

export default UniqueAccessoryModule;
