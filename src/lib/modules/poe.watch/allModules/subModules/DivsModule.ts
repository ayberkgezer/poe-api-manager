import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing div data.
 */
class DivsModule extends PoeWatch {
  /**
   * Creates a new instance of DivsModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "div";
    super(league, type);
  }
}

export default DivsModule;
