import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';
import { User } from '../../../../@generated/prisma-nestjs-graphql/user/user.model';

@InputType()
export class LoginInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;
}
