import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '../prisma.service';
import { BalanceService } from '../balance/balance.service';
import { BalanceModule } from '../balance/balance.module';
import { TransactionModule } from '../transaction/transaction.module';
import { TransactionService } from '../transaction/transaction.service';

@Module({
  imports: [BalanceModule, TransactionModule],
  providers: [
    UsersResolver,
    UsersService,
    PrismaService,
    BalanceService,
    TransactionService,
  ],
  exports: [UsersModule],
})
export class UsersModule {}
