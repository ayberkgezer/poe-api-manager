import PoeWatch from "../../../../AbstractClass/PoeWatch";

/**
 * Subclass of WatchBaseClass for accessing uniqueMaps data.
 */
class UniqueMapsModule extends PoeWatch {
  /**
   * Creates a new instance of UniqueMapsModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "uniqueMap";
    super(league, type);
  }
}

export default UniqueMapsModule;
