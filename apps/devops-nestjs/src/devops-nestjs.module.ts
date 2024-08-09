import { Module } from '@nestjs/common';
import { DevopsNestjsController } from './devops-nestjs.controller';
import { DevopsNestjsService } from './devops-nestjs.service';

@Module({
  imports: [],
  controllers: [DevopsNestjsController],
  providers: [DevopsNestjsService],
})
export class DevopsNestjsModule {}
