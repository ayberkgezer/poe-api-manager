import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing scarab data.
 */
class ScarabModule extends PoeWatch {

  /**
   * Creates a new instance of ScarabModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "scarab";
    super(league, type);
  }
}

export default ScarabModule;
