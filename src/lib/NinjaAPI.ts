import { CurrencyViewModule } from "./modules/poe.ninja/currencyView/CurrencyViewModule";
import { ItemViewModule } from "./modules/poe.ninja/itemView/ItemViewModule";

/**
 * Represents an API for interacting with the poe.ninja API.
 */
export class NinjaAPI {
  /**
   * The CurrencyViewModule instance for fetching currency-related data.
   */
  public currencyView: CurrencyViewModule;

  /** 
   * The ItemViewModule instance for fetching item-related data.
   * 
   */
  public itemView: ItemViewModule;

  /**
   * Creates an instance of NinjaAPI.
   * @param league The PoE league for which data is requested.
   */
  constructor(league: string) {
    this.currencyView = new CurrencyViewModule(league, "currencyoverview");
    this.itemView = new ItemViewModule(league, "itemoverview");
  }
}
