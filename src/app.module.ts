import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

import { redis } from './redis';
import { UsersModule } from './modules/users/users.module';
import { GraphQLError } from 'graphql';

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      playground: true,
      introspection: true,
      debug: false,
      context: ({ req, res }) => ({ req, res, redis }),
      cors: {
        origin: process.env.CLIENT_SIDE_URL,
        credentials: true,
      },

      formatError: (error: GraphQLError) => {
        const graphQLFormattedError = {
          code: error.extensions.code,
          error: error.extensions.response.error,
          message: error.extensions.response.message,
          status: error.extensions.response.statusCode,
        };

        return graphQLFormattedError;
      },
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
