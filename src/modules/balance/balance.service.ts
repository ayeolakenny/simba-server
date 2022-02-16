import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CURRENCIES } from 'src/constants';
import { Balance } from '../../@generated/prisma-nestjs-graphql/balance/balance.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BalanceService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number) {
    await this.prisma.balance.createMany({
      data: [
        {
          amount: 1000,
          currency: CURRENCIES.USD,
          userId,
        },
        {
          amount: 0,
          currency: CURRENCIES.EUR,
          userId,
        },
        {
          amount: 0,
          currency: CURRENCIES.GBP,
          userId,
        },
      ],
    });
    return true;
  }

  async addToBalance(
    userId: number,
    value: number,
    currency: string,
  ): Promise<Boolean> {
    const currentAmount = await this.findOne({ currency, userId });
    const newAmount = currentAmount.amount + value;
    await this.prisma.balance.updateMany({
      where: {
        currency,
        userId,
      },
      data: {
        amount: newAmount,
      },
    });
    return true;
  }

  async removeFromBalance(
    userId: number,
    value: number,
    currency: string,
  ): Promise<Boolean> {
    const currenctAmount = await this.findOne({ currency, userId });
    const newAmount = currenctAmount.amount - value;
    await this.prisma.balance.updateMany({
      where: {
        currency,
        userId,
      },
      data: {
        amount: newAmount,
      },
    });
    return true;
  }

  async findUnique(
    balanceWhereUniqueInput: Prisma.BalanceWhereUniqueInput,
  ): Promise<Balance> {
    return this.prisma.balance.findUnique({
      where: balanceWhereUniqueInput,
    });
  }

  async findOne(input: Prisma.BalanceWhereInput): Promise<Balance> {
    return this.prisma.balance.findFirst({
      where: {
        userId: input.userId,
        currency: input.currency,
      },
    });
  }

  async getUserBalances(req: any) {
    const userBalance = { USD: 0, GBP: 0, EUR: 0 };
    const balances = await this.prisma.balance.findMany({
      where: {
        userId: req.session.userId,
      },
    });
    balances.forEach((balance) => {
      if (balance.currency === 'USD') {
        userBalance.USD = balance.amount;
      } else if (balance.currency === 'EUR') {
        userBalance.EUR = balance.amount;
      } else if (balance.currency === 'GBP') {
        userBalance.GBP = balance.amount;
      }
      userBalance[balance.currency] = balance.amount;
    });
    return userBalance;
  }
}
