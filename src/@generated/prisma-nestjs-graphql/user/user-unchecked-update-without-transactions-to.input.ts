import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUncheckedUpdateManyWithoutSenderInput } from '../transaction/transaction-unchecked-update-many-without-sender.input';
import { BalanceUncheckedUpdateManyWithoutUserInput } from '../balance/balance-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutTransactionsToInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => TransactionUncheckedUpdateManyWithoutSenderInput, {nullable:true})
    transactionsFrom?: TransactionUncheckedUpdateManyWithoutSenderInput;

    @Field(() => BalanceUncheckedUpdateManyWithoutUserInput, {nullable:true})
    Balance?: BalanceUncheckedUpdateManyWithoutUserInput;
}
