import fetchData from "../fetch/watchFetch";
import ValidationError from "../../../errors/ValidationError";

/**
 * Fetches data based on the provided query URL and filters it by category name.
 * @param league - The league to fetch the data from.
 * @param type - The type of data to fetch.
 * @param categoryName - The name of the category to filter the data by.
 * @returns A promise that resolves to an array of filtered data items.
 * @throws Throws an error if category name is not provided or if there is an issue fetching or filtering the data.
 */
async function getCategory(
  league: string,
  type: string,
  categoryName: string,
): Promise<object[]> {
  try {
    // Validate category name first
    if (!categoryName && categoryName !== "0") {
      throw new ValidationError("Category name is required.", 400, {
        league,
        type,
      });
    }
    const fetchedData: object[] = await fetchData(league, type);

    // Filter data by category name
    const filteredData: object[] = fetchedData.filter(
      (item: any) => item.group === categoryName,
    );

    // Check if filtered data is empty
    if (filteredData.length === 0) {
      throw new ValidationError(
        `No data found for category: ${categoryName}`,
        404,
        {
          league,
          type,
          categoryName,
        },
      );
    }

    return filteredData;
  } catch (error) {
    // If it's already a custom error, pass it through
    if (error instanceof ValidationError) {
      throw error;
    }

    throw new ValidationError(
      `Error fetching or filtering data for category: ${(error as Error).message}`,
      400,
      { league, type, categoryName },
    );
  }
}

export default getCategory;
