import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { MyContext } from '../../types';
import { UserCreateInput } from '../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './users.service';
import { LoginInput } from './dto/request/login-Input.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async signup(
    @Args('input') input: UserCreateInput,
    @Context() { req }: MyContext,
  ): Promise<User> {
    return await this.usersService.signup(input, req);
  }

  @Query(() => [User])
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  findUserById(@Args('userId') userId: number) {
    return this.usersService.findUnique({ id: userId });
  }

  @Query(() => User)
  findUserByEmail(@Args('email') email: string) {
    return this.usersService.findUnique({ email: email });
  }

  // Get logged in user
  @Query(() => User, { nullable: true })
  async me(@Context() { req }: MyContext): Promise<User> {
    return this.usersService.me(req);
  }

  //Login
  @Mutation(() => User)
  login(
    @Args('input') input: LoginInput,
    @Context() { req }: MyContext,
  ): Promise<User> {
    return this.usersService.login(input, req);
  }

  // Logout a user
  @Mutation(() => Boolean)
  async logout(@Context() { req, res }: MyContext): Promise<Boolean> {
    return this.usersService.logout(req, res);
  }
}
