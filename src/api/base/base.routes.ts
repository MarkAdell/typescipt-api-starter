import { Router } from 'express';
import baseController from './base.controller';

const router = Router();

router.route('/status')
  .get(
    baseController.getStatus,
  );

export default router;
