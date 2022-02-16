import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBalanceInput } from './user-update-without-balance.input';
import { UserCreateWithoutBalanceInput } from './user-create-without-balance.input';

@InputType()
export class UserUpsertWithoutBalanceInput {

    @Field(() => UserUpdateWithoutBalanceInput, {nullable:false})
    update!: UserUpdateWithoutBalanceInput;

    @Field(() => UserCreateWithoutBalanceInput, {nullable:false})
    create!: UserCreateWithoutBalanceInput;
}
