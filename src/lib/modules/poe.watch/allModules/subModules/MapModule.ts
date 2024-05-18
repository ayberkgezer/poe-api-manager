import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing map data.
 */
class MapModule extends PoeWatch {
  /**
   * Creates a new instance of MapModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "map";
    super(league, type);
  }
}

export default MapModule;
