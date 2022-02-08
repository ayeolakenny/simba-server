import Redis from 'ioredis';
import * as dotenv from 'dotenv';

dotenv.config();

export const redis = new Redis(process.env.REDIS_URL, {
  tls: {
    rejectUnauthorized: false,
  },
  connectTimeout: 10000,
  host: 'ec2-35-168-158-130.compute-1.amazonaws.com',
  port: 23600,
  password: 'p4ec7053ab10c67ab6b137198ad9a611dabff34b5cc82d1770db88a403d591776',
  // url: 'redis://:p4ec7053ab10c67ab6b137198ad9a611dabff34b5cc82d1770db88a403d591776@ec2-35-168-158-130.compute-1.amazonaws.com:23600',
});
