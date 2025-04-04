import axios from "axios";
import WatchUrlGenerator from "../func/WatchUrlGenerator";
import { ApiError } from "../error/ApiError";

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
        "Accept-Encoding": "identity",
      },
    });

    if (response.data) {
      return response.data;
    } else {
      throw new ApiError("Invalid response format from POE Watch API", 400, {
        league,
        type,
      });
    }
  } catch (error) {
    // If it's already an ApiError, pass it through
    if (error instanceof ApiError) {
      throw error;
    }

    // Handle axios errors
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 500;
      const errorDetails = error.response?.data || {};

      throw new ApiError(
        `Error fetching data from poe.watch: ${errorDetails.error || error.message}`,
        statusCode,
        {
          code: errorDetails.code,
          league,
          type,
          url: error.config?.url,
        },
      );
    }

    // General error case
    throw new ApiError(`Error fetching data from poe.watch: ${error}`, 500, {
      league,
      type,
    });
  }
}

export default fetchData;
