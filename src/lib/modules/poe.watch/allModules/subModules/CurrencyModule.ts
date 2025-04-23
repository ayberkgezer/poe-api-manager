import PoeWatch from "../../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing currency data.
 */
export class CurrencyModule extends PoeWatch {
  /**
   * Creates a new instance of CurrencyModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "currency";
    super(league, type);
  }
}
