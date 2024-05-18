import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling unique jewels.
 */
class UniqueJewelModule extends PoeNinja {
  /**
   * Creates an instance of UniqueJewelModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "UniqueJewel";
    super(league, typeName, type);
  }
}

export default UniqueJewelModule;
