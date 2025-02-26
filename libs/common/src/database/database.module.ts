import { Global, Module } from '@nestjs/common';
import { DatabaseProviders } from './database.provider';

@Global()
@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}
