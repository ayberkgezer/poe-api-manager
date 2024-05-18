import getCategory from "../func/getCategory";
import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing armour data.
 */
class ArmourModule extends PoeWatch {
  /**
   * Creates a new instance of ArmourModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "armour";
    super(league, type);
  }

  /**
   * Retrieves category data for armour.
   * @async
   * @param categoryName - The name of the category to retrieve.
   * *  Possible values: "chest", "bodyarmours", "shield", "boots", "gloves", "shields", "helmets", "quiver".
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

export default ArmourModule;
