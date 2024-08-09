import { DataSource } from 'typeorm';
import { getConfig } from '../utils';
import { NamingStrategy } from './nameing.strageies';
import { User } from 'apps/low-code-nestjs/src/user/user.mongo.entity';

const { MONGODB_CONFIG, MYSQL_CONFIG } = getConfig();

const MONGODB_DATABASE_CONFIG = {
  ...MONGODB_CONFIG,
  // entities: [`dist/**/*.${MONGODB_CONFIG.entities}.entity.js`],
  entities: [__dirname + `/src/**/*.${MONGODB_CONFIG.entities}.entity.{ts,js}`],
  // entities: [User],
};
// mongo.entity.ts
const MYSQL_DATABASE_CONFIG = {
  ...MYSQL_CONFIG,
  namingStrategy: new NamingStrategy(),
  // entities: [`dist/**/*.${MYSQL_CONFIG.entities}.entity.js`],
  entities: [__dirname + `/../**/*.${MYSQL_CONFIG.entities}.entity.{ts,js}`],
};

console.log({ MONGODB_DATABASE_CONFIG });
console.log({ MYSQL_DATABASE_CONFIG });
//entities: [__dirname + '/../**/*.entity{.ts,.js}'],
console.log(__dirname);
const MONGODB_DATA_SOURCE = new DataSource(MONGODB_DATABASE_CONFIG);
const MYSQL_DATA_SOURCE = new DataSource(MYSQL_DATABASE_CONFIG);

export const DatabaseProviders = [
  {
    provide: 'MONGODB_DATA_SOURCE',
    useFactory: async () => {
      if (!MONGODB_DATA_SOURCE.isInitialized) {
        // await MONGODB_DATA_SOURCE.initialize();
        MONGODB_DATA_SOURCE.initialize()
          .then((data) => {
            // console.log('data', data);
          })
          .catch((e) => {
            // console.log('e-', e);
          });
        console.log('MONGODB_DATA_SOURCE isInitialized');
      }
      return MONGODB_DATA_SOURCE;
    },
  },
  {
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async () => {
      if (!MYSQL_DATA_SOURCE.isInitialized) {
        await MONGODB_DATA_SOURCE.initialize();
        console.log('MYSQL_DATA_SOURCE isInitialized');
      }
      return MONGODB_DATA_SOURCE;
    },
  },
];
