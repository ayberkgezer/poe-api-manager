import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing inscribed data.
 */
class InscribedModule extends PoeWatch {
  /**
   * Creates a new instance of InscribedModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "inscribed";
    super(league, type);
  }
}

export default InscribedModule;
