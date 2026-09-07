import fetchData from "../fetch/fetchData";
import filterProperties from "../../../mainfunctions/propertyFilter";

/**
 * Fetches data from the specified league, type, and typeName.
 *
 * @param league - The name of the league to fetch data from.
 * @param typeName - The name of the type to fetch data for.
 * @param type - The type of data to fetch.
 * @param requestedProperties - Optional. An array of properties to filter the fetched data by.
 * @returns A promise that resolves to an array of objects containing the fetched data.
 * @throws If there is an error fetching the data.
 */
async function getData(
  league: string,
  typeName: string,
  type: string,
  requestedProperties?: string[],
): Promise<object[]> {
  const fetchedData: object[] = await fetchData(league, typeName, type);

  //if requestedProperties use filterProperties to filter fetchedData
  if (requestedProperties) {
    const result: object[] = filterProperties(
      fetchedData,
      requestedProperties,
    );
    return result;
  } else {
    return fetchedData;
  }
}

export default getData;
