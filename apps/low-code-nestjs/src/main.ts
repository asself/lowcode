import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { TransfromInterceptor } from './common/interceptors/transfrom.interceptor';
import { BaseExceptionFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    type: VersioningType.URI,
  });
  app.useGlobalInterceptors(new TransfromInterceptor());
  app.useGlobalFilters(new BaseExceptionFilter(), new HttpExceptionFilter());
  generateDocument(app);
  await app.listen(3002);
}

bootstrap();
