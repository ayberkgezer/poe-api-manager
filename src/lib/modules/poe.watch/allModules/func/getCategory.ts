import fetchData from "../fetch/watchFetch";

/**
 * Fetches data based on the provided query URL and filters it by category name.
 * @param league - The league to fetch the data from.
 * @param type - The type of data to fetch.
 * @param categoryName - The name of the category to filter the data by.
 * @returns A promise that resolves to an array of filtered data items.
 * @throws Throws an error if category name is not provided or if there is an issue fetching or filtering the data.
 */
async function getCategory(league: string, type: string, categoryName: string): Promise<object[]>{
  try {
    const fetchedData: object[] = await fetchData(league ,type);

    // Validate category name
    if (!categoryName && categoryName !== "0") {
      throw new Error("Category name is required.");
    }

    // Filter data by category name
    const filteredData: object[] = fetchedData.filter((item: any) => item.group === categoryName);

    // Check if filtered data is empty
    if (filteredData.length === 0) {
      throw new Error(`No data found for category: ${categoryName}`);
    }

    return filteredData;
  } catch (error) {
    throw new Error(`Error fetching or filtering data for category: ${(error as Error).message}`);
  }
};

export default getCategory;
