import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling helmet enchants.
 */
class HelmetEnchantModule extends PoeNinja {
  /**
   * Creates an instance of HelmetEnchantModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "HelmetEnchant";
    super(league, typeName, type);
  }
}

export default HelmetEnchantModule;
