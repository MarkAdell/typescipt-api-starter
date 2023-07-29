import { Joi, Segments } from 'celebrate';

const getUserByIdSchema = {
  [Segments.PARAMS]: Joi.object().options({ abortEarly: false }).keys({
    userId: Joi.number().integer().required(),
  }),
};

export default {
  getUserByIdSchema,
};
