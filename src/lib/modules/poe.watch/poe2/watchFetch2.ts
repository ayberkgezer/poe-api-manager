import axios from "axios";
import ApiError from "../../../errors/ApiError";
import CustomError from "../../../errors/CustomError";
import watchUrlGenerator2 from "./watchUrlGenerator2";
import unwrapItems from "./unwrapItems";
import httpGet from "../../utils/httpGet";

/**
 * Fetches PoE2 exchange ratios from the poe.watch API.
 * @param league - The game league for which to fetch data.
 * @returns - A Promise that resolves to the fetched `items` array.
 * @throws - Throws an error if there is an issue with the API response or fetching data.
 */
async function watchFetch2(league: string): Promise<object[]> {
  try {
    const url: string = watchUrlGenerator2(league);
    const response = await httpGet(url);

    return unwrapItems(response.data, { league });
  } catch (error) {
    // If it's already a typed error, pass it through
    if (error instanceof CustomError) {
      throw error;
    }

    // Handle axios errors
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 500;
      const errorDetails = error.response?.data || {};

      throw new ApiError(
        `Error fetching data from poe.watch PoE2: ${errorDetails.error || error.message}`,
        statusCode,
        {
          code: errorDetails.code,
          league,
          url: error.config?.url,
        },
      );
    }

    // General error case
    throw new ApiError(
      `Error fetching data from poe.watch PoE2: ${error}`,
      500,
      { league },
    );
  }
}

export default watchFetch2;
