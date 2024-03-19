const fetchData = require("../fetch/fetch");
const filterProperties = require("../../../mainfunctions/filter/propertyFilter");

/**
 * Retrieves data from the specified URL, optionally filtering based on requested properties.
 *
 * @param {string} queryUrl - The URL to fetch data from.
 * @param {Array<string>} [requestedProperties] - An optional array of property names to filter the data.
 * @returns {Promise<Array<Object>|Object>} - A promise that resolves to the fetched or filtered data.
 * @throws {Error} - Throws an error if there is an issue fetching or filtering the data.
 */
async function getData(queryUrl, requestedProperties) {
  try {
    /**
     * @type {Array<Object>|Object} fetchedData - The fetched data.
     */
    const fetchedData = await fetchData(queryUrl);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      /**
       * @type {Array<Object>|Object} result - The filtered data based on requested properties.
       */
      const result = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    /**
     * Throws an error if there's an issue fetching or filtering the data.
     * @throws {Error}
     */
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = getData;
