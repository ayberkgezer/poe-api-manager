import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling essences.
 */
class EssenceModule extends PoeNinja {
  /**
   * Creates an instance of EssenceModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Essence";
    super(league, typeName, type);
  }
}

export default EssenceModule;
