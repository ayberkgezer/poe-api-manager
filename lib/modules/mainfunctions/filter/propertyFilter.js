/**
 * Filters properties of objects in an array based on the specified properties.
 *
 * @param {Array<Object>} data - The array of objects to filter.
 * @param {Array<string>} requestedProperties - The array of property names to include in the result.
 * @returns {Array<Object>} - An array of objects with only the specified properties.
 */
module.exports = function filterProperties(data, requestedProperties) {
  /**
   * @type {Array<Object>} result - The filtered array of objects.
   */
  const result = [];

  data.forEach((item) => {
    /**
     * @type {Object} itemResult - The filtered object with requested properties.
     */
    const itemResult = {};

    requestedProperties.forEach((prop) => {
      if (item.hasOwnProperty(prop)) {
        itemResult[prop] = item[prop];
      } else {
        /**
         * Warn if the requested property is not found in the object.
         * @type {string}
         */
        console.warn(`Property not found: ${prop}`);
      }
    });

    result.push(itemResult);
  });

  return result;
};
