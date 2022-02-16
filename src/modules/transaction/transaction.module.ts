import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { BalanceModule } from '../balance/balance.module';
import { PrismaService } from '../prisma.service';
import { BalanceService } from '../balance/balance.service';

@Module({
  imports: [BalanceModule],
  providers: [
    TransactionResolver,
    TransactionService,
    PrismaService,
    BalanceService,
  ],
  exports: [TransactionModule],
})
export class TransactionModule {}
