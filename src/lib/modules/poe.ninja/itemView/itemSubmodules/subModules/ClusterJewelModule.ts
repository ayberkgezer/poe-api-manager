import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling cluster jewels.
 */
class ClusterJewelModule extends PoeNinja {
  /**
   * Creates an instance of ClusterJewelModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    // The type name.
    const type: string = "ClusterJewel";
    super(league, typeName, type);
  }
}

export default ClusterJewelModule;
