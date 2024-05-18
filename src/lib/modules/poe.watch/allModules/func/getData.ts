import fetchData from "../fetch/watchFetch";
import filterProperties from "../../../mainfunctions/propertyFilter";

/**
 * Retrieves data from the specified URL, optionally filtering based on requested properties.
 *
 * @param league - The league from which the data will be fetched.
*  @param type - The type of data to be fetched.
 * @param requestedProperties - An optional array of property names to filter the data.
 * @returns - A promise that resolves to the fetched or filtered data.
 * @throws - Throws an error if there is an issue fetching or filtering the data.
 */
async function getData(league: string, type: string, requestedProperties?: string[]): Promise<object[]> {
  try {
    const fetchedData: object[] = await fetchData(league, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties && requestedProperties.length > 0) {
      const result: object[] = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}

export default getData;
