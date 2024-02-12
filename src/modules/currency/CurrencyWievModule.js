const currencySubmodules = require("./currencySubmodules/CurrencySubModules");
const baseurl = require("../../config/poeNinja/url");

//currencywiev module
class CurrencyWievModule {
  constructor(league) {
    this.league = league;
    this.baseurl = baseurl.baseurl;
    const url = `${this.baseurl}currencyoverview?league=${this.league}&type=`;

    this.currency = new currencySubmodules.CurrencyModule(url);
    this.fragment = new currencySubmodules.FragmentModule(url);
  }
}

//export CurrencyWievModule;
module.exports = CurrencyWievModule;
