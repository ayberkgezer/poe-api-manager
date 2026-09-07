import fetchData2 from "./fetchData2";
import filterProperties from "../../../mainfunctions/propertyFilter";

/**
 * Fetches PoE2 data from poe.ninja and optionally filters it.
 * @param league - The name of the league to fetch data from.
 * @param type - The poe.ninja PoE2 type to fetch data for.
 * @param endpoint - Which PoE2 economy endpoint to hit ("exchange" or "item").
 * @param requestedProperties - Optional. An array of properties to filter the fetched data by.
 * @returns A promise that resolves to an array of objects containing the fetched data.
 * @throws If there is an error fetching the data.
 */
async function getData2(
  league: string,
  type: string,
  endpoint: "exchange" | "item",
  requestedProperties?: string[],
): Promise<object[]> {
  const fetchedData: object[] = await fetchData2(league, type, endpoint);

  if (requestedProperties) {
    return filterProperties(fetchedData, requestedProperties);
  } else {
    return fetchedData;
  }
}

export default getData2;
