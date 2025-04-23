import PoeNinja from "../../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling unique maps.
 */
export class UniqueMapModule extends PoeNinja {
  /**
   * Creates an instance of UniqueMapModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "UniqueMap";
    super(league, typeName, type);
  }
}
