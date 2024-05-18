import axios from "axios";

/**
 * Fetches data from the provided URL using Axios.
 * @param url The URL to fetch data from.
 * @returns A Promise that resolves with the fetched data.
 * @throws If an error occurs during the fetch process.
 */
async function fetchData(url: string): Promise<{ data: any[] }> {
  try {
    const response: any = await axios.get(url, {
      headers: {
        'Accept-Encoding': 'identity',
      },
    });
    return response;
  } catch (error) {
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}

export default fetchData;
