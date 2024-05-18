import { CurrencyModule, FragmentModule } from "./currencySubModules/CurrencySubModules";

/**
 * Represents a module for fetching currency overview data.
 */
export class CurrencyViewModule {
  /**
   * Represents a module for fetching currency data.
   */
  public currency: CurrencyModule;

  /**
   * Represents a module for fetching fragment data.
   */
  public fragment: FragmentModule;

  /**
   * Creates a new CurrencyViewModule instance.
   * @param league The name of the Path of Exile league.
   * @param typeName The type of data to retrieve.
   */
  constructor(league: string, typeName: string) {
    this.currency = new CurrencyModule(league, typeName);
    this.fragment = new FragmentModule(league, typeName);
  }
}
