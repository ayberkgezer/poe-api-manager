import axios from "axios";
import mergeData from "./merge/mergeData";
import urlGenerator from "../func/urlGenerator";
import ApiError from "../../../errors/ApiError";

/**
 * Fetches data from a specified API endpoint, merges relevant data, and returns the result.
 * @param league The game league for which to fetch data.
 * @param type The type of data to fetch. (e.g. "Currency", "Fragment")
 * @param typeName The name of the type of data to fetch. (e.g. "CurrencyOverview", "ItemOverview")
 * @returns A promise that resolves to an array of merged objects containing both line and currency details.
 * @throws Throws an error if there's an issue with the API response or data fetching process.
 */
async function fetchData(
  league: string,
  typeName: string,
  type: string,
): Promise<object[]> {
  try {
    // Generate the URL for the specified league, type name, and type
    const url: string = urlGenerator(league, typeName, type);
    //axios.get(url) is a promise
    const response = await axios.get(url, {
      headers: {
        "Accept-Encoding": "identity",
      },
    });
    //typwName is either currencyoverview or itemoverview
    if (typeName == "currencyoverview") {
      //if the response has data and lines and currencyDetails
      if (
        response.data &&
        response.data.lines &&
        response.data.currencyDetails
      ) {
        const lines: any[] = response.data.lines;
        const currencyDetails: any[] = response.data.currencyDetails;
        //the join data is the currencyDetails
        return mergeData(lines, currencyDetails);
      } else {
        throw new ApiError(
          `Invalid response format from POE Ninja API CurrencyView Type:${type}`,
          400,
          { league, typeName, type },
        );
      }
    } else if (typeName == "itemoverview") {
      //if the response has data and lines
      if (response.data && response.data.lines) {
        return response.data.lines;
      } else {
        throw new ApiError(
          `Invalid response format from POE Ninja API ItemView Type:${type}`,
          400,
          { league, typeName, type },
        );
      }
    } else {
      throw new ApiError(`Invalid type: ${type}`, 400, {
        league,
        typeName,
        type,
      });
    }
  } catch (error: any) {
    // If it's already an ApiError, pass it through
    if (error instanceof ApiError) {
      throw error;
    }
    // Handle axios errors with more context
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 500;
      throw new ApiError(
        `Error fetching data: ${error.message} TypeName:${typeName} and Type:${type}`,
        statusCode,
        { url: error.config?.url, league, typeName, type },
      );
    }
    // General error case
    throw new ApiError(
      `Error fetching data: ${error.message} TypeName:${typeName} and Type:${type}`,
      500,
      { league, typeName, type },
    );
  }
}

export default fetchData;
