import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();

//Entry point of nestJS application
//Compiled into JS because Node JS cannot run Typescript and gets bundled and wraps into a single application
//NestFactory --> helps to create a new nest application
