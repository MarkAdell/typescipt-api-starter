import httpStatus from 'http-status';

class APIError extends Error {
  additionalData: Record<string, any>;

  status: number;

  isOperational: boolean;

  isPublic: boolean;

  constructor({
    message,
    additionalData = {},
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isOperational = true,
    isPublic = true,
  }: {
    message: string;
    additionalData?: Record<string, any>;
    status?: number;
    isOperational?: boolean;
    isPublic?: boolean;
  }) {
    super(message);
    this.additionalData = additionalData;
    this.status = status;
    this.isOperational = isOperational;
    this.isPublic = isPublic;
    Error.captureStackTrace(this, APIError);
  }
}

export default APIError;
