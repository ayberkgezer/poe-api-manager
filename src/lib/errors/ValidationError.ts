import CustomError from "./CustomError";

/**
 * Represents an API error with a message, status code, and additional details.
 * @class
 * @extends {CustomError}
 */
export default class ValidationError extends CustomError {
  public details: any;

  /**
   * Creates a new instance of ApiError.
   * @param {string} message - The error message.
   * @param {number} statusCode - The HTTP status code.
   * @param {any} details - The additional details of the error.
   */
  constructor(message: string, statusCode: number, details?: any) {
    super(message, statusCode);
    this.details = details;
  }
}
