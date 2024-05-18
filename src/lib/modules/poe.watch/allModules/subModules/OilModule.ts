import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing oil data.
 */
class OilModule extends PoeWatch {
  /**
   * Creates a new instance of OilModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "oil";
    super(league, type);
  }
}

export default OilModule;
