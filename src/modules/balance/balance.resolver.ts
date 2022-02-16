import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { MyContext } from '../../types';
import { Balance } from '../../@generated/prisma-nestjs-graphql/balance/balance.model';
import { BalanceService } from './balance.service';
import { UserBalances } from './dto/user-balance.input';

@Resolver(() => Balance)
export class BalanceResolver {
  constructor(private readonly balanceService: BalanceService) {}

  // @Mutation(() => Balance)
  // createBalance(@Args('userId') userId: number) {
  //   return this.balanceService.create(userId);
  // }

  @Mutation(() => Boolean)
  removeFromBalance(
    @Args('userId') userId: number,
    @Args('value') value: number,
    @Args('currency') currency: string,
  ) {
    return this.balanceService.removeFromBalance(userId, value, currency);
  }

  @Query(() => UserBalances)
  async getUserBalances(@Context() { req }: MyContext) {
    return await this.balanceService.getUserBalances(req);
  }
}
