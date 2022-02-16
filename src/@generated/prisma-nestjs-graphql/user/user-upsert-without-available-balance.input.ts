import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAvailableBalanceInput } from './user-update-without-available-balance.input';
import { UserCreateWithoutAvailableBalanceInput } from './user-create-without-available-balance.input';

@InputType()
export class UserUpsertWithoutAvailableBalanceInput {

    @Field(() => UserUpdateWithoutAvailableBalanceInput, {nullable:false})
    update!: UserUpdateWithoutAvailableBalanceInput;

    @Field(() => UserCreateWithoutAvailableBalanceInput, {nullable:false})
    create!: UserCreateWithoutAvailableBalanceInput;
}
