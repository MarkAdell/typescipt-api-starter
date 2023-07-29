import httpStatus from 'http-status';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import GetUserByIdService from './services/getUserById.service';
import usersErrors from './users.errors';
import APIError from '../../errors/api-error';

const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const parameters = {
    userId: req.params.userId,
  };

  const getUserByIdService = new GetUserByIdService();
  const userResult = await getUserByIdService.execute(parameters);

  if (!userResult.success) {
    throw new APIError({
      ...usersErrors.USER_ERROR_1,
      additionalData: userResult.hasOwnProperty('exception') ? { exception: userResult.exception } : {},
    });
  }

  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    data: userResult.data,
  });
});

export default {
  getUserById,
};
