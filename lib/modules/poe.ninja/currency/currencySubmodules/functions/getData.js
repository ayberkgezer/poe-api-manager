const fetchData = require("../../currencyFetch/fetchCurrency");
const filterProperties = require("../../../../mainfunctions/filter/propertyFilter");

/**
 * Asynchronously fetches data from a specified URL and optionally filters the result based on requested properties.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {string} type - The type of data to fetch.
 * @param {Array<string>} [requestedProperties] - (Optional) An array of property names to include in the filtered result.
 * @returns {Promise<Array<Object>|Object>} - A promise that resolves to the fetched data, or a filtered subset based on requested properties.
 * @throws {Error} - Throws an error if there's an issue fetching or processing the data.
 */
async function getData(url, type, requestedProperties) {
  try {
    // Fetch data using the fetchData function
    const fetchedData = await fetchData(url, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      /**
       * @type {Array<Object>} result - The filtered array of objects.
       */
      const result = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    /**
     * Throws an error if there's an issue fetching or processing the data.
     * @throws {Error}
     */
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = getData;
