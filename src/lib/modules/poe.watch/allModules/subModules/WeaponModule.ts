import getCategory from "../func/getCategory";
import PoeWatch from "../../../AbstractClass/PoeWatch";

/**
 * Subclass of PoeWatch for accessing weapon data.
 */
class WeaponModule extends PoeWatch {

  /**
   * Creates a new instance of WeaponModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "weapon";
    super(league, type);
  }

  /**
   * Retrieves category data for accessories.
   * @async
   * @param categoryName - The name of the category to retrieve.
   * *   Possible values: "twohandswords", "fishingrods", "onehandswords", "twohandaxes", "staves", "warstaff", "daggers", "scepters".
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

export default WeaponModule;
