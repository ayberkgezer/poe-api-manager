import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing jewel data.
 */
class JewelModule extends PoeWatch {
  /**
   * Creates a new instance of JewelModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "jewel";
    super(league, type);
  }
}

export default JewelModule;
