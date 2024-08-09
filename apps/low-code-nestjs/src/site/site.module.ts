import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { getConfig } from 'libs/common/utils';
const { MONGODB_CONFIG } = getConfig();
@Module({
  imports: [TypeOrmModule.forFeature([Site], MONGODB_CONFIG['name'])],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
