const axios = require("axios");

/**
 * Fetches data from the provided URL using Axios.
 * @param {string} url The URL to fetch data from.
 * @returns {Promise<any>} A Promise that resolves with the fetched data.
 * @throws {Error} If an error occurs during the fetch process.
 */
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response fetched");
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = fetchData;
