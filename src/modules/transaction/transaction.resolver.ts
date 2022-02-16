import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { TransactionService } from './transaction.service';
import { Transaction } from '../../@generated/prisma-nestjs-graphql/transaction/transaction.model';
import { SendMoneyInput } from './dto/send-money.dto';
import { MyContext } from '../../types';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Mutation(() => Boolean)
  async sendMoney(@Args('input') input: SendMoneyInput): Promise<Boolean> {
    await this.transactionService.sendMoney(input);
    return true;
  }

  @Query(() => [Transaction])
  async getUserTransactions(@Context() { req }: MyContext) {
    return await this.transactionService.getUserTransactions(req);
  }
}
