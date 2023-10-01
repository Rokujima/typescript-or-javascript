import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { createClientOptions } from './client-options';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([createClientOptions('gateway')]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
