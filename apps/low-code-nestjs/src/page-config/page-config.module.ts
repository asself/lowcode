import { Module } from '@nestjs/common';
import { PageConfigService } from './page-config.service';
import { PageConfigController } from './page-config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageConfig } from './entities/page-config.entity';
import { getConfig } from 'libs/common/utils';
const { MONGODB_CONFIG } = getConfig();
@Module({
  imports: [TypeOrmModule.forFeature([PageConfig], MONGODB_CONFIG['name'])],
  controllers: [PageConfigController],
  providers: [PageConfigService],
})
export class PageConfigModule {}
