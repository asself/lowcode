import { NestFactory } from '@nestjs/core';
import { DevopsNestjsModule } from './devops-nestjs.module';

async function bootstrap() {
  const app = await NestFactory.create(DevopsNestjsModule);
  await app.listen(3001);
}
bootstrap();
