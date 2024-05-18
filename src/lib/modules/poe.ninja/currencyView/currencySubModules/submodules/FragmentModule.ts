import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling fragments in the PoeNinja currency view.
 */
class FragmentModule extends PoeNinja {
  /**
   * Creates an instance of FragmentModule.
   * @param league The league for which the module is created.
   * @param typeName The type name of the module.
   */
  constructor(protected league: string, protected typeName: string) {
    const type: string = "Fragment";
    super(league, typeName, type);
  }
}

export default FragmentModule;
