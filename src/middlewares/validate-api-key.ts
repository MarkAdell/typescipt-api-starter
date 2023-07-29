import APIError from '../errors/api-error';
import httpStatus from 'http-status';
import config from '../config/config';
import { Request, Response, NextFunction } from 'express';

const validateAPIKey = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const APIKey = req.headers['x-api-key'];

    if (!APIKey) {
      throw new APIError({
        message: 'x-api-key header is not provided',
        status: httpStatus.UNAUTHORIZED,
      });
    }

    // eslint-disable-next-line security-node/detect-possible-timing-attacks
    if (APIKey !== config.auth.api_key) {
      throw new APIError({
        message: 'You are not authorized to do this action',
        status: httpStatus.UNAUTHORIZED,
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};

export default validateAPIKey;
