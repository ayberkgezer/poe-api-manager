import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing sextans data.
 */
class SextantModule extends PoeWatch {
  /**
   * Creates a new instance of SextantModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "sextans";
    super(league, type);
  }
}

export default SextantModule;
