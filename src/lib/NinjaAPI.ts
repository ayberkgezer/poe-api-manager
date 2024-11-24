import { CurrencyViewModule } from "./modules/poe.ninja/currencyView/CurrencyViewModule";
import { ItemViewModule } from "./modules/poe.ninja/itemView/ItemViewModule";

/**
 * Represents an API for interacting with the poe.ninja API.
 * @class
 */
export class NinjaAPI {
  /**
   * The CurrencyViewModule instance for fetching currency-related data.
   * @type {CurrencyViewModule}
   */
  public currencyView: CurrencyViewModule;

  /** 
   * The ItemViewModule instance for fetching item-related data.
   * @type {ItemViewModule}
   */
  public itemView: ItemViewModule;

  /**
   * Creates an instance of NinjaAPI.
   * @param {string} league The PoE league for which data is requested.
   */
  constructor(league: string) {
    this.currencyView = new CurrencyViewModule(league, "currencyoverview");
    this.itemView = new ItemViewModule(league, "itemoverview");
  }
}
