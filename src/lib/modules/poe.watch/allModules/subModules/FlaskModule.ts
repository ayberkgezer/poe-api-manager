import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing flask data.
 */
class FlaskModule extends PoeWatch {
  /**
   * Creates a new instance of FlaskModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "flask";
    super(league, type);
  }
}

export default FlaskModule;
