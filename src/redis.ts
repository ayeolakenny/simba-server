import Redis from 'ioredis';
import * as dotenv from 'dotenv';

dotenv.config();

export const redis = new Redis(process.env.REDIS_URL, {
  // tls: {
  //   rejectUnauthorized: false,
  // },
  db: 0,
});

// const REDIS_URL = process.env.REDIS_URL;
// export const redis = REDIS_URL.includes('rediss://')
//   ? new Redis({
//       port: 23600,
//       host: 'ec2-35-168-158-130.compute-1.amazonaws.com',
//       password:
//         'p4ec7053ab10c67ab6b137198ad9a611dabff34b5cc82d1770db88a403d591776',
//       db: 0,
//       tls: {
//         rejectUnauthorized: false,
//       },
//     })
//   : new Redis(REDIS_URL);
