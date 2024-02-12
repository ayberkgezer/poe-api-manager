const ItemWievModule = require("./modules/item/ItemWievModule");
const CurrencyWievModule = require("./modules/currency/CurrencyWievModule");

class NinjaAPI {
  constructor(league) {
    this.league = league;
    this.currencyWiev = new CurrencyWievModule(league);
    this.itemWiev = new ItemWievModule(league);
  }
}
module.exports = NinjaAPI;
