import { User } from '../../../@generated/prisma-nestjs-graphql/user/user.model';

// Exclude keys from user
export const exclude = (user: User, ...keys) => {
  for (let key of keys) {
    delete user[key];
  }
  return user;
};
