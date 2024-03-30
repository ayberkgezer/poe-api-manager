const axios = require("axios");
const urlGenerator = require("../itemUrlGenerator/ItemUrlGenerator");

/**
 * Asynchronously fetches data from a specified URL for item-related information.
 *
 * @param {string} league - The league name for the data fetch operation.
 * @param {string} type - The specific type of item data to fetch.
 * @returns {Promise<Array<Object>>} - A promise that resolves to the fetched item data.
 * @throws {Error} - Throws an error if there's an issue fetching or processing the data.
 */
async function fetchData(league, type) {
  try {
    /**
     * @type {string} url - The complete URL for fetching item-related data.
     */
    const url = urlGenerator(league, type);

    const response = await axios.get(url);

    if (response.data && response.data.lines) {
      return response.data.lines;
    } else {
      throw new Error("Invalid response format from POE Ninja API ItemView");
    }
  } catch (error) {
    /**
     * Throws an error if there's an issue fetching or processing the item-related data.
     * @throws {Error}
     */
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

// Export the fetchData function.
module.exports = fetchData;
