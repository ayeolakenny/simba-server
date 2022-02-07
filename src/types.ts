import { Request, Response } from 'express';
import { Redis } from 'ioredis';

export type MyContext = {
  req: Request & {
    session: {
      userId?: any;
    };
  };
  res: Response & {
    session: {
      userId?: any;
    };
  };
  redis: Redis;
};
