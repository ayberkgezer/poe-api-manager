import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling unique relics.
 */
class UniqueRelicModule extends PoeNinja {
  /**
   * Creates an instance of UniqueRelicModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "UniqueRelic";
    super(league, typeName, type);
  }
}

export default UniqueRelicModule;
