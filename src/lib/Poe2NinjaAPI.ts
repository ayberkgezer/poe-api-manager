import Poe2ExchangeView from "./modules/poe.ninja/poe2/Poe2ExchangeView";
import Poe2ItemView from "./modules/poe.ninja/poe2/Poe2ItemView";

/**
 * Represents an API for interacting with the poe.ninja Path of Exile 2 economy API.
 * @class
 */
export class Poe2NinjaAPI {
  /**
   * The exchange types for this league (includes currency - PoE2 has no
   * stash currency endpoint).
   * @type {Poe2ExchangeView}
   */
  public exchange: Poe2ExchangeView;

  /**
   * The stash item types for this league. Empty on "Standard"; use an
   * active league (see Utils.getPoe2Leagues()).
   * @type {Poe2ItemView}
   */
  public itemView: Poe2ItemView;

  /**
   * Creates an instance of Poe2NinjaAPI.
   * @param {string} league The PoE2 league for which data is requested.
   */
  constructor(league: string) {
    this.exchange = new Poe2ExchangeView(league);
    this.itemView = new Poe2ItemView(league);
  }
}
