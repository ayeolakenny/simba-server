import Redis from 'ioredis';
import * as dotenv from 'dotenv';

dotenv.config();

export const redis = new Redis(process.env.REDIS_URL, {
  tls: {
    rejectUnauthorized: false,
  },
  db: 0,
  connectTimeout: 10000,
});
