const ItemWievModule = require("./modules/poe.ninja/item/ItemWievModule");
const CurrencyWievModule = require("./modules/poe.ninja/currency/CurrencyWievModule");

class NinjaAPI {
  constructor(league) {
    this.league = league;
    this.currencyWiev = new CurrencyWievModule(league);
    this.itemWiev = new ItemWievModule(league);
  }
}
module.exports = NinjaAPI;
