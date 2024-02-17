const axios = require("axios");

// items for a specific fetch function
async function fetchData(baseurl, type) {
  try {
    const url = `${baseurl}${type}`;
    const response = await axios.get(url);

    if (response.data && response.data.lines) {
      return response.data.lines;
    } else {
      throw new Error("Invalid response format from POE Ninja API Itemwiev");
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

// export fetchData;
module.exports = fetchData;
