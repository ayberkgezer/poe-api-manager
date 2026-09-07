import fetchData from "./httpGet";
import ApiError from "../../errors/ApiError";

/**
 * Fetches league names from poe.ninja's economy leagues endpoint.
 * @param version Which game's leagues to fetch.
 * @returns A Promise that resolves with an array of league names.
 * @throws If an error occurs during the fetch process or if the response data is empty.
 */
async function getNinjaLeagues(version: "poe1" | "poe2"): Promise<string[]> {
  const url = `https://poe.ninja/${version}/api/economy/leagues`;
  try {
    const { data }: { data: any[] } = await fetchData(url);

    if (!data || !Array.isArray(data)) {
      throw new ApiError(
        `Invalid response format from poe.ninja ${version} leagues API`,
        400,
        { url },
      );
    }

    const names: string[] = data.map((item: any) => item.name);

    if (names.length === 0) {
      throw new ApiError(`No ${version} leagues found in response`, 404, {
        url,
      });
    }

    return names;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      `Error fetching ${version} League Names: ${(error as Error).message}`,
      500,
      { url },
    );
  }
}

export default getNinjaLeagues;
