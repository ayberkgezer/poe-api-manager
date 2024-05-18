import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling divination cards.
 */
class DivinationCardModule extends PoeNinja {
  /**
   * Creates an instance of DivinationCardModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "DivinationCard";
    super(league, typeName, type);
  }
}

export default DivinationCardModule;
