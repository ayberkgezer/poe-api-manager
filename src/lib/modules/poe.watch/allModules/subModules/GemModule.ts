import PoeWatch from "../../../../AbstractClass/PoeWatch";
import getCategory from "../../func/getCategory";

/**
 * Class for retrieving gem data from the POE Watch API.
 */
export class GemModule extends PoeWatch {
  /**
   * Creates a new instance of GemModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "gem";
    super(league, type);
  }

  /**
   * Retrieves category data for accessories.
   * @async
   * @param categoryName - The name of the category to retrieve.
   * *  Possible values: "gems", "supportgem".
   * @returns - A Promise containing data for the specified category.
   * @throws - Throws errors encountered while fetching data.
   */
  async getCategory(categoryName: string): Promise<object[]> {
    return await getCategory(this.league, this.type, categoryName);
  }
}
