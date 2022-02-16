import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MESSAGES } from '../../core/messages';
import { BalanceService } from '../balance/balance.service';
import { PrismaService } from '../prisma.service';
import { SendMoneyInput } from './dto/send-money.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService, private balance: BalanceService) {}

  async create(input: Prisma.TransactionCreateInput) {
    const {
      sender,
      status,
      reciever,
      amount,
      exchangeRate,
      sourceCurrency,
      targetCurrency,
    } = input;
    await this.prisma.transaction.create({
      data: {
        amount,
        status,
        sender,
        reciever,
        exchangeRate,
        sourceCurrency,
        targetCurrency,
      },
    });
  }

  async sendMoney(input: SendMoneyInput): Promise<Boolean> {
    const errMessage = [];
    const {
      senderId,
      recieverEmail,
      amount,
      exchangeRate,
      sourceCurrency,
      targetCurrency,
    } = input;

    const reciever = await this.prisma.user.findUnique({
      where: {
        email: recieverEmail,
      },
    });

    const recieverId = await reciever.id;

    const fromAvailableBalance = await this.balance.findOne({
      userId: senderId,
      currency: sourceCurrency,
    });

    if (amount > fromAvailableBalance.amount) {
      await this.create({
        sender: { connect: { id: senderId } },
        status: 0,
        reciever: { connect: { id: recieverId } },
        amount,
        exchangeRate,
        sourceCurrency,
        targetCurrency,
      });
      errMessage.push(MESSAGES.TRANSACTION.INSUFFICIENT_FUND);
      if (errMessage.length) throw new BadRequestException(errMessage);
    }

    await this.balance.addToBalance(recieverId, exchangeRate, targetCurrency);
    await this.balance.removeFromBalance(senderId, amount, sourceCurrency);

    await this.prisma.transaction.create({
      data: {
        amount,
        senderId,
        recieverId,
        status: 1,
        sourceCurrency,
        targetCurrency,
        exchangeRate,
      },
    });

    return true;
  }

  async getUserTransactions(req: any) {
    return await this.prisma.transaction.findMany({
      where: {
        OR: [
          {
            recieverId: {
              equals: req.session.userId,
            },
          },
          {
            senderId: {
              equals: req.session.userId,
            },
          },
        ],
      },
      select: {
        recieverId: true,
        senderId: true,
        reciever: {
          select: {
            name: true,
            email: true,
          },
        },
        sender: {
          select: {
            name: true,
            email: true,
          },
        },
        id: true,
        amount: true,
        sourceCurrency: true,
        targetCurrency: true,
        createdAt: true,
        updatedAt: true,
        status: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
