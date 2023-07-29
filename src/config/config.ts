import * as dotenv from 'dotenv';
import * as envalid from 'envalid';

dotenv.config();

envalid.cleanEnv(process.env, {
  PORT: envalid.port(),
  NODE_ENV: envalid.str(),
  API_KEY: envalid.str(),
  LOGGING_LEVEL: envalid.str(),
});

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logging: {
    level: process.env.LOGGING_LEVEL,
  },
  auth: {
    api_key: process.env.API_KEY,
  },
};

export default config;
