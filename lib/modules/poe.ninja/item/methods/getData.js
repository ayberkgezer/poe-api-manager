const fetchData = require("../itemFetch/fetchItem");
const filterProperties = require("../../../mainfunctions/filter/propertyFilter");

/**
 * Asynchronously fetches and filters item-related data from a specified URL.
 *
 * @param {string} url - The URL to fetch item-related data from.
 * @param {string} type - The type of item data to fetch.
 * @param {Array<string>} [requestedProperties] - (Optional) An array of property names to include in the filtered result.
 * @returns {Promise<Array<Object>|Object>} - A promise that resolves to the fetched or filtered item data.
 * @throws {Error} - Throws an error if there's an issue fetching or processing the data.
 */
async function getData(url, type, requestedProperties) {
  try {
    // Fetch data using the fetchData function
    /**
     * @type {Array<Object>|Object} fetchedData - The fetched item data.
     */
    const fetchedData = await fetchData(url, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      /**
       * @type {Array<Object>|Object} result - The filtered item data based on requested properties.
       */
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
