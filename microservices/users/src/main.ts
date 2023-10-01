import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();


console.log(process.env.KAFKA);
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'users',
        brokers: process.env.KAFKA.split(','),
      },
      consumer: {
        groupId: `users`,
      },
    }
  });

  await app.listen();
}
bootstrap();
