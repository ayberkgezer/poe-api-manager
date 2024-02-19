const fetchData = require("../fetch/fetch");
const filterProperties = require("../../../mainfunctions/filter/propertyFilter");

async function getData(queryUrl, requestedProperties) {
  try {
    const fetchedData = await fetchData(queryUrl);
    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      const result = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    throw new Error(`Error fetching data poe.watch: ${error.message}`);
  }
}

module.exports = getData;
