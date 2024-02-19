const axios = require("axios");
const baseUrl = require("../../../../config/poeWatch/url").baseurl;

async function fetchData(queryUrl) {
  try {
    const url = `${baseUrl}${queryUrl}`;
    const response = await axios.get(url);

    if (response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response format from POE Watch API");
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = fetchData;
