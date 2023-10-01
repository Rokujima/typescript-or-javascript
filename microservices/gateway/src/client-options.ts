import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `${process.cwd()}/src/config/env/.env.${process.env.NODE_ENV}`,
});

export const createClientOptions = (
  microserviceName: string,
): ClientProviderOptions => {
  const upperCaseMicroserviceName: string = microserviceName.toUpperCase();

  const clientOptions: ClientProviderOptions = {
    name: `${upperCaseMicroserviceName}`,
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: `${microserviceName}`,
        brokers: process.env.KAFKA.split(','),
      },
      consumer: {
        groupId: `${microserviceName}-produce`,
      },
    },
  };

  return clientOptions;
};
