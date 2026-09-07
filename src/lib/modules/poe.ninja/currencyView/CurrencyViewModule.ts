import PoeNinja from "../../../AbstractClass/PoeNinja";
import PoeNinjaLeaf from "../../../AbstractClass/PoeNinjaLeaf";
import { CurrencyModule } from "./CurrencyModule";

const TYPE_NAME = "currencyoverview";

/**
 * Represents a module for fetching currency overview data.
 */
export default class CurrencyViewModule {
  /**
   * Represents a module for fetching currency data.
   */
  public currency: CurrencyModule;

  /**
   * Represents a module for fetching fragment data.
   */
  public fragment: PoeNinja;

  /**
   * Creates a new CurrencyViewModule instance.
   * @param league The name of the Path of Exile league.
   */
  constructor(league: string) {
    this.currency = new CurrencyModule(league, TYPE_NAME);
    this.fragment = new PoeNinjaLeaf(league, TYPE_NAME, "Fragment");
  }
}
