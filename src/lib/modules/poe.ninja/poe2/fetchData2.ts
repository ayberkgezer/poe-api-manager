import axios from "axios";
import mergeExchangeData from "../fetch/merge/mergeExchangeData";
import urlGenerator2 from "./urlGenerator2";
import ApiError from "../../../errors/ApiError";
import CustomError from "../../../errors/CustomError";
import httpGet from "../../utils/httpGet";

/**
 * Fetches data from poe.ninja's PoE2 economy API.
 * @param league The game league for which to fetch data.
 * @param type The poe.ninja PoE2 type (e.g. "Currency", "UniqueWeapons").
 * @param endpoint "exchange" reuses mergeExchangeData like the PoE1 exchange
 * endpoint (identical response shape); "item" is the PoE2 stash endpoint,
 * whose lines already carry everything needed, so no merge is required.
 * @returns A promise that resolves to an array of objects containing the fetched data.
 * @throws Throws an error if there's an issue with the API response or data fetching process.
 */
async function fetchData2(
  league: string,
  type: string,
  endpoint: "exchange" | "item",
): Promise<object[]> {
  try {
    const url: string = urlGenerator2(league, type, endpoint);
    const response = await httpGet(url);

    if (endpoint === "exchange") {
      if (response.data && response.data.lines && response.data.items) {
        return mergeExchangeData(
          response.data.lines,
          response.data.items,
          response.data.core,
        );
      } else {
        throw new ApiError(
          `Invalid response format from POE Ninja PoE2 Exchange Type:${type}`,
          400,
          { league, type, endpoint },
        );
      }
    } else {
      if (response.data && response.data.lines) {
        return response.data.lines;
      } else {
        throw new ApiError(
          `Invalid response format from POE Ninja PoE2 Item Type:${type}`,
          400,
          { league, type, endpoint },
        );
      }
    }
  } catch (error: any) {
    // If it's already a typed error (ApiError/ValidationError), pass it through
    if (error instanceof CustomError) {
      throw error;
    }
    // Handle axios errors with more context
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 500;
      throw new ApiError(
        `Error fetching data: ${error.message} Type:${type} Endpoint:${endpoint}`,
        statusCode,
        { url: error.config?.url, league, type, endpoint },
      );
    }
    // General error case
    throw new ApiError(
      `Error fetching data: ${error.message} Type:${type} Endpoint:${endpoint}`,
      500,
      { league, type, endpoint },
    );
  }
}

export default fetchData2;
