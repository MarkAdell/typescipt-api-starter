import httpStatus from 'http-status';
import APIError from '../errors/api-error';
import config from '../config/config';
import logger from '../config/logger';
import { isCelebrateError } from 'celebrate';
import { Request, Response, NextFunction } from 'express';

/**
 * If error is not an instanceOf APIError, convert it.
 */
const converter = (err: any, req: Request, res: Response, next: NextFunction) => {
  let convertedError = err;
  if (isCelebrateError(err)) {
    const validation: any = {};
    for (const [segment, joiError] of err.details.entries()) {
      validation[segment] = {
        message: joiError.message,
      };
    }
    convertedError = new APIError({
      message: JSON.stringify(validation),
      additionalData: {},
      status: httpStatus.BAD_REQUEST,
      isOperational: true,
      isPublic: true,
    });
  } else if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      additionalData: err.additionalData,
      status: err.status,
      isOperational: false,
      isPublic: false,
    });
  }
  next(convertedError);
};

/**
 * Catch 404 and forward to error handler
 */
const notFound = (req: Request, res: Response, next: NextFunction) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
    isPublic: true,
  });
  next(err);
};

const serializeError = (err: any) => JSON.stringify(err, Object.getOwnPropertyNames(err));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error: ${JSON.stringify({
    message: err.message,
    stack_trace: err.stack,
    exception: serializeError(err.additionalData.exception ?? {}),
  }, null, 2)}`);

  /* Todo: send the error in a notification somewhere or an email
   to the developers if err.isOperational is false */
  res.status(err.status).json({
    code: err.status,
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : undefined,
  });
};

export default {
  converter,
  notFound,
  handler,
};
