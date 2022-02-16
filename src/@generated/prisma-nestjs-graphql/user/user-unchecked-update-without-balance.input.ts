import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUncheckedUpdateManyWithoutRecieverInput } from '../transaction/transaction-unchecked-update-many-without-reciever.input';
import { TransactionUncheckedUpdateManyWithoutSenderInput } from '../transaction/transaction-unchecked-update-many-without-sender.input';

@InputType()
export class UserUncheckedUpdateWithoutBalanceInput {

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

    @Field(() => TransactionUncheckedUpdateManyWithoutRecieverInput, {nullable:true})
    transactionsTo?: TransactionUncheckedUpdateManyWithoutRecieverInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutSenderInput, {nullable:true})
    transactionsFrom?: TransactionUncheckedUpdateManyWithoutSenderInput;
}
