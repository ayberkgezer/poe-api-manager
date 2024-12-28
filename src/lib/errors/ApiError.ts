import CustomError from "./CustomError";

/**
 * Represents an API error with a message, status code, and additional details.
 */
class ApiError extends CustomError {
    public details: any;

    constructor(message: string, statusCode: number, details?: any) {
        super(message, statusCode);
        this.details = details;
    }
}

export default ApiError;