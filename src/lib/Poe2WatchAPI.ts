import Poe2ExchangeModule from "./modules/poe.watch/poe2/Poe2ExchangeModule";

/**
 * Represents an API for interacting with poe.watch's Path of Exile 2 support.
 * @class
 */
export class Poe2WatchAPI {
  /**
   * The PoE2 exchange ratios module - the only PoE2 endpoint poe.watch exposes.
   * @type {Poe2ExchangeModule}
   */
  public exchange: Poe2ExchangeModule;

  /**
   * Creates a new instance of Poe2WatchAPI.
   * @param {string} league - The league for which the API should be initialized.
   */
  constructor(league: string) {
    this.exchange = new Poe2ExchangeModule(league);
  }
}
