import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './user.mongo.entity';

export const UserProviders: Provider[] = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (AppDataSource: DataSource) => {
      const d = await AppDataSource.getRepository(User);
      console.log('===d', d);
      return d;
    },
    inject: ['MONGODB_DATA_SOURCE'],
  },
];
