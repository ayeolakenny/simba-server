import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';
import { request } from 'http';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Signup user
  async signup(signupInput: Prisma.UserCreateInput, req: any): Promise<User> {
    const hashedPassword = await argon2.hash(signupInput.password);
    const user = await this.prisma.user.create({
      data: {
        ...signupInput,
        password: hashedPassword,
      },
    });
    req.session.userId = user.id;
    return user;
  }

  async findById(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  // Get current logged in user
  async me(req: any): Promise<User> {
    if (!req.session.userId) return null;
    const user = await this.findById({ id: req.session.userId });
    return user;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
