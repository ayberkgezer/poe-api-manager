import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing beast data.
 */
class BeastModule extends PoeWatch {
  /**
   * Creates a new instance of BeastModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "beast";
    super(league, type);
  }
}

export default BeastModule;
