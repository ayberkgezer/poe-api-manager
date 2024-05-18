import getCategory from "../func/getCategory";
import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing accessory data.
 */
class AccessoryModule extends PoeWatch {
  /**
   * Creates a new instance of AccessoryModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "accessory";
    super(league, type);
  }

  /**
   * Retrieves category data for accessories.
   * @async
   * @param categoryName - The name of the category to retrieve.
   * *  Possible values: "amulets", "rings", "belts", "quivers".
   * @returns - A Promise containing data for the specified category.
   * @throws - Throws errors encountered while fetching data.
   */
  async getCategory(categoryName: string): Promise<object[]> {
    try {
      return await getCategory(this.league, this.type, categoryName);
    } catch (error) {
      throw new Error(`Error fetching Accessory data: ${(error as Error).message}`);
    }
  }
}

export default AccessoryModule;
