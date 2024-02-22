/**
 * Merges data from two sources based on a common property.
 *
 * @param {Array<Object>} lines - The array of objects containing data to be merged.
 * @param {Array<Object>} currencyDetails - The array of objects containing additional details for merging.
 * @returns {Array<Object>} - An array of objects resulting from merging the data based on a common property.
 */
function mergeData(lines, currencyDetails) {
  /**
   * @type {Array<Object>} mergedData - The array to store the merged data.
   */
  const mergedData = [];

  lines.forEach((line) => {
    /**
     * @type {string} currencyType - The type of currency from the lines array.
     */
    const currencyType = line.currencyTypeName;

    // Find the corresponding currencyDetail based on currencyType
    const currencyDetail = currencyDetails.find(
      (detail) => detail.name === currencyType
    );

    if (currencyDetail) {
      // Merge line and currencyDetail into a new object
      /**
       * @type {Object} mergedItem - The merged object containing properties from both line and currencyDetail.
       */
      const mergedItem = {
        ...line,
        id: currencyDetail.id,
        icon: currencyDetail.icon,
        name: currencyDetail.name,
      };

      // Add the merged item to the result array
      mergedData.push(mergedItem);
    }
  });

  return mergedData;
}

module.exports = mergeData;
