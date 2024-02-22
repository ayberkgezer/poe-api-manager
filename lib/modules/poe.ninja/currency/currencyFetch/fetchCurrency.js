const axios = require("axios");
const mergeData = require("./merge/mergeData");

/**
 * Fetches data from a specified URL and performs data merging.
 *
 * @param {string} baseurl - The base URL for the data fetch operation.
 * @param {string} type - The specific type of data to fetch.
 * @returns {Promise<Array<Object>>} - A promise that resolves to the merged data.
 * @throws {Error} - Throws an error if there's an issue fetching or processing the data.
 */
async function fetchData(baseurl, type) {
  try {
    /**
     * @type {string} url - The complete URL for fetching data.
     */
    const url = `${baseurl}${type}`;

    /**
     * @type {Object} response - The response object from the data fetch operation.
     */
    const response = await axios.get(url);

    if (response.data && response.data.lines && response.data.currencyDetails) {
      /**
       * @type {Array<Object>} lines - The array of objects containing data lines.
       */
      const lines = response.data.lines;

      /**
       * @type {Array<Object>} currencyDetails - The array of objects containing currency details.
       */
      const currencyDetails = response.data.currencyDetails;

      /**
       * @type {Array<Object>} mergedData - The array resulting from merging the data lines and currency details.
       */
      const mergedData = mergeData(lines, currencyDetails);

      return mergedData;
    } else {
      throw new Error(
        "Invalid response format from POE Ninja API Currencywiev"
      );
    }
  } catch (error) {
    /**
     * Throws an error if there's an issue fetching or processing the data.
     * @throws {Error}
     */
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

// Export the fetchData function.
module.exports = fetchData;
