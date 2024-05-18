import axios from "axios";
import WatchUrlGenerator from "../func/WatchUrlGenerator";

/**
 * Fetches data from the POE Watch API based on the provided query URL.
 * @param league - The game league for which to fetch currency data.
 * @param type - The type of data to fetch.
 * @returns - A Promise that resolves to the fetched data.
 * @throws - Throws an error if there is an issue with the API response or fetching data.
 */
async function fetchData(league: string, type: string): Promise<object[]> {
  try {
    const url: string = WatchUrlGenerator(league, type);
    const response = await axios.get(url, {
      headers: {
        'Accept-Encoding': 'identity',
      },
    });

    if (response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response format from POE Watch API");
    }
  } catch (error) {
    throw new Error(`Error fetching data from poe.watch: ${(error as Error).message}`);
  }
}

export default fetchData;
