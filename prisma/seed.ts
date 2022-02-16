import { PrismaClient } from '@prisma/client';

import * as argon2 from 'argon2';
import { CURRENCIES } from '../src/constants';

const prisma = new PrismaClient();

const seedUsers: {
  name: string;
  email: string;
  password: string;
}[] = [
  {
    name: 'Jack',
    email: 'jack@gmail.com',
    password: 'password',
  },
  {
    name: 'Mary',
    email: 'mary@gmail.com',
    password: 'password',
  },
];

export const seedDb = async () => {
  seedUsers.forEach(async (userData) => {
    const hashedPassword = await argon2.hash(userData.password);
    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      },
    });

    await prisma.balance.createMany({
      data: [
        {
          amount: 1000,
          currency: CURRENCIES.USD,
          userId: user.id,
        },
        {
          amount: 0,
          currency: CURRENCIES.EUR,
          userId: user.id,
        },
        {
          amount: 0,
          currency: CURRENCIES.GBP,
          userId: user.id,
        },
      ],
    });

    await prisma.transaction.create({
      data: {
        status: 1,
        sender: { connect: { id: user.id } },
        reciever: { connect: { id: user.id } },
        amount: 1000,
        sourceCurrency: CURRENCIES.USD,
        targetCurrency: CURRENCIES.USD,
        exchangeRate: 1000,
      },
    });
  });
};

seedDb()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
