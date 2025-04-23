import PoeNinja from "../../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling fossils.
 */
export class FossilModule extends PoeNinja {
  /**
   * Creates an instance of FossilModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Fossil";
    super(league, typeName, type);
  }
}
