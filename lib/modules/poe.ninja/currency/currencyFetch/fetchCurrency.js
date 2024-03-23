const axios = require("axios");
const mergeData = require("./merge/mergeData");
const currencyUrlGenerator = require("../currencyUrlGenerator/CurrencyUrlGenerator");

/**
 * Fetches data from a specified API endpoint, merges relevant data, and returns the result.
 *
 * @param {string} league - The game league for which to fetch currency data.
 * @param {string} type - The type of data to fetch. (e.g. "Currency", "Fragment")
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of merged objects containing both line and currency details.
 * @throws {Error} - Throws an error if there's an issue with the API response or data fetching process.
 */
async function fetchData(league, type) {
  try {
    const url = currencyUrlGenerator(league, type);
    const response = await axios.get(url);

    if (response.data && response.data.lines && response.data.currencyDetails) {
      const lines = response.data.lines;
      const currencyDetails = response.data.currencyDetails;

      // Merge data using the mergeData function
      const mergedData = mergeData(lines, currencyDetails);
      return mergedData;
    } else {
      throw new Error(
        "Invalid response format from POE Ninja API CurrencyView"
      );
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = fetchData;
