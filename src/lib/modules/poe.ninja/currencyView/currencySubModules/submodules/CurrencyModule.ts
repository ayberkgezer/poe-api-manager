import PoeNinja from "../../../../AbstractClass/PoeNinja";
import getQuickCurrency from "../../../func/getQuickCurrency";

/**
 * Represents a module for retrieving currency data from the PoeNinja API.
 */
class CurrencyModule extends PoeNinja {
  /**
   * Creates an instance of CurrencyModule.
   * @param league - The name of the league.
   * @param typeName - The name of the type.
   */
  constructor(protected league: string, protected typeName: string) {
    const type: string = "Currency";
    super(league, typeName, type);
  }

  /**
   * Retrieves the quick currency data for the specified currency type.
   * @param currencyTypeName - The name of the currency. Defaults to "Divine Orb".
   * @returns A promise that resolves to an object containing the currency type name and its chaos equivalent value.
   * @throws If there is an error fetching the quick currency data.
   */
  async getQuickCurrency(currencyTypeName: string = "Divine Orb"): Promise<{ currencyTypeName: string, chaosEquivalent: number }> {
    try {
      return await getQuickCurrency(this.league, this.typeName, this.type, currencyTypeName);
    } catch (error: any) {
      throw new Error(`Error fetching QuickCurrencyData ${this.type} and Currency Name:${currencyTypeName} data: ${error.message}`);
    }
  }
}

export default CurrencyModule;