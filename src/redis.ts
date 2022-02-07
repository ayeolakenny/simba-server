import Redis from 'ioredis';
import * as dotenv from 'dotenv';

import fs from 'fs';

dotenv.config();

export const redis = new Redis(process.env.REDIS_URL, {
  tls: {
    rejectUnauthorized: false,
  },
  connectTimeout: 10000,
});
