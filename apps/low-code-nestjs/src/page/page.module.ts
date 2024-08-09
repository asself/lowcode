import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './entities/page.entity';
import { getConfig } from 'libs/common/utils';
const { MONGODB_CONFIG } = getConfig();
@Module({
  imports: [TypeOrmModule.forFeature([Page], MONGODB_CONFIG['name'])],
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}
