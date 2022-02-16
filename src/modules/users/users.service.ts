import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';

import { MESSAGES } from '../../core/messages';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { PrismaService } from '../prisma.service';
import { LoginInput } from './dto/request/login-Input.dto';
import { BalanceService } from '../balance/balance.service';
import { TransactionService } from '../transaction/transaction.service';
import { COOKIE_NAME, CURRENCIES } from '../../constants';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private balance: BalanceService,
    private transaction: TransactionService,
  ) {}

  // Signup user
  async signup(input: Prisma.UserCreateInput, req: any): Promise<User> {
    const errMessage = [];
    const emailUsed = await this.findUnique({ email: input.email });
    if (emailUsed) errMessage.push(MESSAGES.AUTH.EMAIL_CONFLICT);
    if (errMessage.length) throw new BadRequestException(errMessage);
    const hashedPassword = await argon2.hash(input.password);
    const user = await this.prisma.user.create({
      data: {
        ...input,
        password: hashedPassword,
      },
    });
    await this.balance.create(user.id);
    await this.transaction.create({
      sourceCurrency: CURRENCIES.USD,
      sender: { connect: { id: user.id } },
      status: 1,
      reciever: { connect: { id: user.id } },
      amount: 1000,
      targetCurrency: CURRENCIES.USD,
      exchangeRate: 1000,
    });
    req.session.userId = user.id;
    return user;
  }

  async findUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  // Get current logged in user
  async me(req: any): Promise<User> {
    if (!req.session.userId) return null;
    const user = await this.findUnique({ id: req.session.userId });
    return user;
  }

  async login(input: LoginInput, req: any): Promise<User> {
    const errMessage = [];
    const user = await this.findUnique({ email: input.email });
    if (!user) errMessage.push(MESSAGES.AUTH.INVALID_CREDENTIALS);
    if (errMessage.length) throw new BadRequestException(errMessage);
    const valid = await argon2.verify(user.password, input.password);
    if (!valid) errMessage.push(MESSAGES.AUTH.INVALID_CREDENTIALS);
    if (errMessage.length) throw new BadRequestException(errMessage);
    req.session.userId = user.id;
    return user;
  }

  // Logout user
  async logout(req: any, res: any): Promise<Boolean> {
    return new Promise((resolve) =>
      req.session.destroy((err: any) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          resolve(false);
          return;
        }
        resolve(true);
      }),
    );
  }

  findAll() {
    return this.prisma.user.findMany();
  }
}
