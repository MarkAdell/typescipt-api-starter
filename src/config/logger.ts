import config from './config';
import 'winston-daily-rotate-file';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: config.logging.level,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.DailyRotateFile({
      filename: 'node-starter-%DATE%.log',
      dirname: 'logs',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '500m',
      maxFiles: '7d',
    }),
  ],
});

if (config.env === 'development') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize({ all: true }),
    ),
  }));
}

export default logger;
