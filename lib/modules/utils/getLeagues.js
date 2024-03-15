const fetchData = require("./functions/fetch/fetch");

/**
 * Fetches league names from the provided URL.
 *
 * This function fetches data from the specified URL which contains information about
 * Path of Exile leagues. It then extracts the names of the leagues from the fetched data
 * and returns them as an array.
 *
 * @returns {Promise<string[]>} A Promise that resolves with an array of league names.
 * @throws {Error} If an error occurs during the fetch process or if the response data is empty.
 */
async function getLeagues() {
  const url = "https://api.poe.watch/leagues";
  try {
    const fetchedData = await fetchData(url);
    const names = fetchedData.map((item) => item.name);
    return names;
  } catch (error) {
    throw new Error(`Error fetching League Names: ${error.message}`);
  }
}

module.exports = getLeagues;
