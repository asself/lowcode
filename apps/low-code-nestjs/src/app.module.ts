import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
import { UserModule } from './user/user.module';
import { SiteModule } from './site/site.module';
import { PageModule } from './page/page.module';
import { PageConfigModule } from './page-config/page-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
const { MONGODB_CONFIG, MYSQL_CONFIG } = getConfig();
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    TypeOrmModule.forRoot({
      ...MONGODB_CONFIG,
      entities: `dist/**/*.${MONGODB_CONFIG.entities}.entity.js`,
    }),
    // TypeOrmModule.forRoot({
    //   ...MYSQL_CONFIG,
    //   entities: `dist/**/*.${MYSQL_CONFIG.entities}.entity.js`,
    // }),
    // UserModule,
    SiteModule,
    PageModule,
    PageConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
