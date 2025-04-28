/**
 * Represents a custom error with a message and a status code.
 * @class
 * @extends {Error}
 */
export default class CustomError extends Error {
  public statusCode: number;

  /**
   * Creates a new instance of CustomError.
   * @param {string} message - The error message.
   * @param {number} statusCode - The HTTP status code.
   */
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
