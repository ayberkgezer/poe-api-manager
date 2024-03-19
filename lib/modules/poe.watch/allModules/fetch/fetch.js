const axios = require("axios");
/**
 * Fetches data from the POE Watch API based on the provided query URL.
 * @param {string} queryUrl - The query URL to be appended to the base URL.
 * @returns {Promise<Object>} - A Promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if there is an issue with the API response or fetching data.
 */
async function fetchData(queryUrl) {
  try {
    const response = await axios.get(queryUrl);

    if (response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response format from POE Watch API");
    }
  } catch (error) {
    /**
     * @throws {Error} - Throws an error with a specific message if there is an issue with fetching data.
     */
    throw new Error(`Error fetching data from poe.watch: ${error.message}`);
  }
}

module.exports = fetchData;
