const fetchData = require("../itemFetch/fetchItem");
const filterProperties = require("../../../mainfunctions/filter/propertyFilter");

/**
 * Asynchronously fetches and filters item-related data from a specified URL.
 *
 * @param {string} league - The name of the current league.
 * @param {string} type - The type of item data to fetch.
 * @param {Array<string>} [requestedProperties] - (Optional) An array of property names to include in the filtered result.
 * @returns {Promise<Array<Object>|Object>} - A promise that resolves to the fetched or filtered item data.
 * @throws {Error} - Throws an error if there's an issue fetching or processing the data.
 */
async function getData(league, type, requestedProperties) {
  try {
    // Fetch data using the fetchData function
    const fetchedData = await fetchData(league, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      const result = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    /**
     * Throws an error if there's an issue fetching or processing the item data.
     * @throws {Error}
     */
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = getData;
