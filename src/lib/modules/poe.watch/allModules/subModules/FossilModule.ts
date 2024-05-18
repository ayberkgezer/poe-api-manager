import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing fossil data.
 */
class FossilModule extends PoeWatch {
  /**
   * Creates a new instance of FossilModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "fossil";
    super(league, type);
  }
}

export default FossilModule;
