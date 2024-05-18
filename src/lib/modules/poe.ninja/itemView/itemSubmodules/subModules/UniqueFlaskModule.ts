import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling unique flasks.
 */
class UniqueFlaskModule extends PoeNinja {
  /**
   * Creates an instance of UniqueFlaskModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "UniqueFlask";
    super(league, typeName, type);
  }
}

export default UniqueFlaskModule;
