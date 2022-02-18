import { NestFactory } from '@nestjs/core';
import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { COOKIE_NAME, __prod__ } from './constants';
import { redis } from './redis';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  const RedisStore = connectRedis(session);

  app.set('trust proxy', 1);

  app.use(
    session({
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      name: COOKIE_NAME,
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        secure: true,
        httpOnly: true,
        sameSite: 'none',
      },
    }),
  );

  const PORT = process.env.PORT;
  await app.listen(PORT || 4000);
}
bootstrap();
