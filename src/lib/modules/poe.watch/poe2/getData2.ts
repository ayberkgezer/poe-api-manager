import fetchData2 from "./watchFetch2";
import filterProperties from "../../../mainfunctions/propertyFilter";

/**
 * Retrieves PoE2 exchange ratios data, optionally filtering based on requested properties.
 * @param league - The league from which the data will be fetched.
 * @param requestedProperties - An optional array of property names to filter the data.
 * @returns - A promise that resolves to the fetched or filtered data.
 * @throws - Throws an error if there is an issue fetching or filtering the data.
 */
async function getData2(
  league: string,
  requestedProperties?: string[],
): Promise<object[]> {
  const fetchedData: object[] = await fetchData2(league);

  if (requestedProperties && requestedProperties.length > 0) {
    return filterProperties(fetchedData, requestedProperties);
  } else {
    return fetchedData;
  }
}

export default getData2;
