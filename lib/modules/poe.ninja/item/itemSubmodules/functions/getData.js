const fetchData = require("../../itemFetch/fetchItem");
const filterProperties = require("../../../../mainfunctions/filter/propertyFilter");

async function getData(url, type, requestedProperties) {
  try {
    // Fetch data using the fetchData function
    const fetchedData = await fetchData(url, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      const result = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = getData;
