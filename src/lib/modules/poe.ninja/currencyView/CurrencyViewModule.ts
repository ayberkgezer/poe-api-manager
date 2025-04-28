import * as Modules from "./currencySubModules/CurrencySubModules";

/**
 * Represents a module for fetching currency overview data.
 */
export default class CurrencyViewModule {
  /**
   * Represents a module for fetching currency data.
   */
  public currency: Modules.CurrencyModule;

  /**
   * Represents a module for fetching fragment data.
   */
  public fragment: Modules.FragmentModule;

  /**
   * Creates a new CurrencyViewModule instance.
   * @param league The name of the Path of Exile league.
   * @param typeName The type of data to retrieve.
   */
  constructor(league: string, typeName: string) {
    this.currency = new Modules.CurrencyModule(league, typeName);
    this.fragment = new Modules.FragmentModule(league, typeName);
  }
}
