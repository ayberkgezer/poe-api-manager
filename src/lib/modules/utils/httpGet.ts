import axios from "axios";

const { version: PACKAGE_VERSION } = require("../../../../package.json");

/**
 * Shared axios GET helper. Every caller in this library needs the same
 * Accept-Encoding/User-Agent headers; this is the one place that builds them.
 * Callers keep their own error wrapping - this only shares the transport.
 * @param url The URL to fetch.
 * @returns The axios response.
 */
async function httpGet(url: string): Promise<any> {
  return axios.get(url, {
    headers: {
      "Accept-Encoding": "identity",
      "User-Agent": `poe-api-manager/${PACKAGE_VERSION} (+https://github.com/ayberkgezer/poe-api-manager)`,
    },
  });
}

export default httpGet;
