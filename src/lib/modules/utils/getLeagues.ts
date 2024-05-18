import fetchData from "./fetchData/fetchData";

/**
 * Fetches league names from the provided URL.
 *
 * This function fetches data from the specified URL which contains information about
 * Path of Exile leagues. It then extracts the names of the leagues from the fetched data
 * and returns them as an array.
 *
 * @returns A Promise that resolves with an array of league names.
 * @throws  If an error occurs during the fetch process or if the response data is empty.
 */
async function getLeagues(): Promise<string[]> {
  const url: string = "https://api.poe.watch/leagues";
  try {
    const { data }: { data: any[] } = await fetchData(url);
    const names: string[] = data.map((item: any) => item.name);
    return names;
  } catch (error) {
    throw new Error(`Error fetching League Names: ${(error as Error).message}`);
  }
}



export default getLeagues;
