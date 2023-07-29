import config from './config/config';
import app from './app';
import { createServer } from 'http';
import logger from './config/logger';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

const server = createServer(app);

server.listen(config.port, () => {
  logger.info(`Server started on port ${config.port} (${config.env})`);
});

process.on('uncaughtexception', (err) => {
  logger.error(`Uncaught Exception: ${err}`);
  process.exit(0);
});

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled Rejection: ${reason}`);
  process.exit(0);
});
