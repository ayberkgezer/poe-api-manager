import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing fragment data.
 */
class FragmentModule extends PoeWatch {
  /**
   * Creates a new instance of FragmentModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "fragment";
    super(league, type);
  }
}

export default FragmentModule;
