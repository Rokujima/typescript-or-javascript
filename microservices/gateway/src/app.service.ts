import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('GATEWAY') private readonly gatewayClient: ClientKafka,
  ){}

  async getHelloCompanies(): Promise<string> {
    return firstValueFrom(this.gatewayClient.send('companies.hello', {}));
  }

  async getHelloUsers(): Promise<string> {
    return firstValueFrom(this.gatewayClient.send('users.hello', {}));
  }

  onModuleInit() {
    this.gatewayClient.subscribeToResponseOf('companies.hello');
    this.gatewayClient.subscribeToResponseOf('users.hello');
    this.gatewayClient.connect();
  }
}
