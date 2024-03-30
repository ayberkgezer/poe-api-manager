const fetchData = require("../currencyFetch/fetchCurrency");
const filterProperties = require("../../../mainfunctions/filter/propertyFilter");

/**
 * Retrieves data from a specified API endpoint, optionally filters the data based on requested properties, and returns the result.
 *
 * @param {string} url - The URL of the API endpoint.
 * @param {string} type - The type of data to fetch.
 * @param {Array<string>} [requestedProperties] - An optional array of property names to filter the fetched data.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of objects containing the fetched and possibly filtered data.
 * @throws {Error} - Throws an error if there's an issue with the data fetching process or filtering process.
 *
 * @async
 * @function
 *
 */
async function getData(league, type, requestedProperties) {
  try {
    // Fetch data using the fetchData function
    const fetchedData = await fetchData(league, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      /**
       * Filter the fetched data based on the specified properties.
       *
       * @type {Array<Object>}
       */
      const result = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    /**
     * An error indicating an issue with the data fetching or filtering process.
     *
     * @throws {Error} - Throws an error with a descriptive message.
     */
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = getData;
