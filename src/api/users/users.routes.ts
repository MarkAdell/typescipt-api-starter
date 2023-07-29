import { Router } from 'express';
import { celebrate } from 'celebrate';
import usersController from './users.controller';
import userSchemas from './users.validation';

const router = Router();

router.route('/:userId')
  .get(
    celebrate(userSchemas.getUserByIdSchema),
    usersController.getUserById,
  );

export default router;
