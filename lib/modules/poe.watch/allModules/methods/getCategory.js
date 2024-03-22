const fetchData = require("../fetch/fetch");

/**
 * Fetches data based on the provided query URL and filters it by category name.
 *
 * @async
 * @function
 * @param {string} queryUrl - The URL to fetch the data from.
 * @param {string} categoryName - The name of the category to filter the data by.
 * @returns {Promise<Array<Object>|Object>} - A promise that resolves to an array of filtered data items.
 * @throws {Error} Throws an error if category name is not provided or if there is an issue fetching or filtering the data.
 */
const getCategory = async (queryUrl, categoryName) => {
  try {
    /**
     * @type {Array<Object>} fetchedData - The fetched data.
     */
    const fetchedData = await fetchData(queryUrl);

    // Validate category name
    if (!categoryName && categoryName !== 0) {
      /**
       * Throws an error if the category name is not provided.
       * @throws {Error}
       */
      throw new Error("Category name is required.");
    }

    // Filter data by category name
    const filteredData = fetchedData.filter(
      (item) => item.group === categoryName
    );

    // Check if filtered data is empty
    if (filteredData.length === 0) {
      /**
       * Throws an error if no data is found for the specified category.
       * @throws {Error}
       */
      throw new Error(`No data found for category: ${categoryName}`);
    }

    return filteredData;
  } catch (error) {
    /**
     * Throws an error if there's an issue fetching or filtering data for the category.
     * @throws {Error}
     */
    throw new Error(
      `Error fetching or filtering data for category: ${error.message}`
    );
  }
};

module.exports = getCategory;
