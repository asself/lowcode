import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';
import { DatabaseModule } from 'libs/common/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
