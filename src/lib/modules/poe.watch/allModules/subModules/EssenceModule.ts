import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing esssence data.
 */
class EssenceModule extends PoeWatch {
  /**
   * Creates a new instance of EssenceModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "esssence";
    super(league, type);
  }
}

export default EssenceModule;
