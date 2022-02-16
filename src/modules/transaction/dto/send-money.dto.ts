import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsEmail, IsEnum } from 'class-validator';
import { CURRENCIES } from 'src/constants';

@InputType()
export class SendMoneyInput {
  @Field(() => Int)
  senderId: number;

  @Field(() => String)
  @IsEmail()
  recieverEmail: string;

  @Field(() => Int)
  amount: number;

  @Field(() => Float)
  exchangeRate: number;

  @Field(() => String)
  @IsEnum(CURRENCIES, { each: true })
  sourceCurrency: string;

  @Field(() => String)
  @IsEnum(CURRENCIES, { each: true })
  targetCurrency: string;
}
