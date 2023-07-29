import { Request, Response } from 'express';
import httpStatus from 'http-status';

const getStatus = (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    message: 'API is alive!',
  });
};

export default {
  getStatus,
};
