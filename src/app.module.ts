import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

import { redis } from './redis';
import { UsersModule } from './modules/users/users.module';
import { GraphQLError } from 'graphql';
import { BalanceModule } from './modules/balance/balance.module';
import { TransactionModule } from './modules/transaction/transaction.module';

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      playground: true,
      debug: false,
      introspection: true,
      context: ({ req, res }) => ({ req, res, redis }),
      cors: {
        origin: process.env.CORS_ORIGIN,
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
    BalanceModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
