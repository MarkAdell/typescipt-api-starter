import { Router } from 'express';
import baseRouter from './base/base.routes';
import usersRouter from './users/users.routes';

const router = Router();

router.use('/', baseRouter);
router.use('/users', usersRouter);

export default router;
