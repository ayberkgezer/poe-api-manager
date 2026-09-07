import fetchData2 from "./watchFetch2";
import filterByCategory from "./filterByCategory";
import ValidationError from "../../../errors/ValidationError";
import ApiError from "../../../errors/ApiError";
import CustomError from "../../../errors/CustomError";

/**
 * Fetches PoE2 exchange ratios and filters them by category.
 * @param league - The league to fetch the data from.
 * @param categoryName - The category to filter by (matches the `category` field).
 * @returns A promise that resolves to an array of filtered items.
 * @throws Throws a ValidationError if category name is missing or matches nothing.
 */
async function getCategory2(
  league: string,
  categoryName: string,
): Promise<object[]> {
  try {
    // Validate category name first
    if (!categoryName && categoryName !== "0") {
      throw new ValidationError("Category name is required.", 400, {
        league,
      });
    }
    const fetchedData: object[] = await fetchData2(league);

    const filteredData: object[] = filterByCategory(fetchedData, categoryName);

    if (filteredData.length === 0) {
      throw new ValidationError(
        `No data found for category: ${categoryName}`,
        404,
        { league, categoryName },
      );
    }

    return filteredData;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }

    throw new ApiError(
      `Error fetching or filtering data for category: ${(error as Error).message}`,
      500,
      { league, categoryName },
    );
  }
}

export default getCategory2;
