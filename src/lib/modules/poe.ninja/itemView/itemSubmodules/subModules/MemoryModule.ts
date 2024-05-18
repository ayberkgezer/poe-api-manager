import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling memories.
 */
class MemoryModule extends PoeNinja {
  /**
   * Creates an instance of MemoryModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Memory";
    super(league, typeName, type);
  }
}

export default MemoryModule;
