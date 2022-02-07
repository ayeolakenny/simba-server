import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { MyContext } from '../../types';
import { UserCreateInput } from '../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async signup(
    @Args('signupInput') signupInput: UserCreateInput,
    @Context() { req }: MyContext,
  ) {
    return await this.usersService.signup(signupInput, req);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  // Get logged in user
  @Query(() => User, { nullable: true })
  async me(@Context() { req }: MyContext): Promise<User> {
    return this.usersService.me(req);
  }

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
