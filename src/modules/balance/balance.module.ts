import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceResolver } from './balance.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [BalanceResolver, BalanceService, PrismaService],
})
export class BalanceModule {}
