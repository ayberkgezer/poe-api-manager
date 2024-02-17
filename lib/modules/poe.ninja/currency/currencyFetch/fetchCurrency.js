const axios = require("axios");
const mergeData = require("./merge/mergeData");

// items for a specific fetch function
async function fetchData(baseurl, type) {
  try {
    const url = `${baseurl}${type}`;
    const response = await axios.get(url);

    if (response.data && response.data.lines && response.data.currencyDetails) {
      const lines = response.data.lines;
      const currencyDetails = response.data.currencyDetails;
      const mergedData = mergeData(lines, currencyDetails);
      return mergedData;
    } else {
      throw new Error(
        "Invalid response format from POE Ninja API Currencywiev"
      );
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

// export fetchData;
module.exports = fetchData;
