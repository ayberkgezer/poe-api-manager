import ApiError from "../../../errors/ApiError";

/**
 * Unwraps the `{items:[...]}` envelope returned by the poe.watch PoE2
 * exchange ratios endpoint (unlike PoE1's /get, which returns a bare array).
 * @param data The raw response body.
 * @param context Extra context (league) attached to a thrown ApiError.
 * @returns The `items` array.
 * @throws {ApiError} If `data.items` is missing or not an array.
 */
export default function unwrapItems(
  data: any,
  context: { league: string },
): object[] {
  if (data && Array.isArray(data.items)) {
    return data.items;
  }
  throw new ApiError(
    "Invalid response format from POE Watch PoE2 exchange ratios API",
    400,
    context,
  );
}
