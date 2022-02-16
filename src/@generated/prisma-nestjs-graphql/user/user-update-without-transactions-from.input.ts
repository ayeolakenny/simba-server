import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUpdateManyWithoutRecieverInput } from '../transaction/transaction-update-many-without-reciever.input';
import { BalanceUpdateManyWithoutUserInput } from '../balance/balance-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutTransactionsFromInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TransactionUpdateManyWithoutRecieverInput, {nullable:true})
    transactionsTo?: TransactionUpdateManyWithoutRecieverInput;

    @Field(() => BalanceUpdateManyWithoutUserInput, {nullable:true})
    Balance?: BalanceUpdateManyWithoutUserInput;
}