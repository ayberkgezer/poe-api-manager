import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents an item submodule for retrieving data on Coffin items.
 */
class CoffinModule extends PoeNinja {
  /**
   * Constructs an instance of CoffinModule.
   * @param league - The name of the league to retrieve data for.
   * @param typeName - The typename of item to retrieve data for.
   */
  constructor(league: string, typeName: string) {
    const type: string = "Coffin";
    super(league, typeName, type);
  }
}

export default CoffinModule;