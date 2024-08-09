import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const generateDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle('api')
    .setDescription('api doc')
    .setVersion('1.0.0')
    .build();
  const apiDoc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/doc', app, apiDoc);
};
