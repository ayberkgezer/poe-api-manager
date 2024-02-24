const ItemViewModule = require("./modules/poe.ninja/item/ItemWievModule");
const CurrencyViewModule = require("./modules/poe.ninja/currency/CurrencyWievModule");

/**
 * Represents an API for interacting with the poe.ninja API.
 *
 * @class
 */
class NinjaAPI {
  /**
   * Creates an instance of NinjaAPI.
   *
   * @param {string} league - The PoE league for which data is requested.
   */
  constructor(league) {
    /**
     * The CurrencyViewModule instance for fetching currency-related data.
     *
     * @type {CurrencyViewModule}
     */
    this.currencyView = new CurrencyViewModule(league);

    /**
     * The ItemViewModule instance for fetching item-related data.
     *
     * @type {ItemViewModule}
     */
    this.itemView = new ItemViewModule(league);
  }
}

// Export the NinjaAPI class
module.exports = NinjaAPI;
