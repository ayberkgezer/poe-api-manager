import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing deliriumOrb data.
 */
class DeliriumOrbModule extends PoeWatch {
  /**
   * Creates a new instance of DeliriumOrbModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "deliriumOrb";
    super(league, type);
  }
}

export default DeliriumOrbModule;
