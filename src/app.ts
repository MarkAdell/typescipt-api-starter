import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import * as swaggerUi from 'swagger-ui-express';
import config from './config/config';
import errorHandler from './middlewares/error-handler';
import swaggerDocument from './docs/swagger.json';
import api from './api/index';
import logger from './config/logger';

const app = express();

app.use(morgan('dev', {
  skip: () => config.env === 'test',
  stream: { write: (message: string) => logger.info(message) },
}));

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', api);

app.use(errorHandler.converter);

app.use(errorHandler.notFound);

app.use(errorHandler.handler);

export default app;
