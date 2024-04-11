import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('ECommerce Documentation')
    .setDescription('The Developer ECommerce Description Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(
    app as INestApplication,
    config,
  );
  SwaggerModule.setup('api/docs', app as INestApplication, document);
  await app.listen(3000);
}
bootstrap();
