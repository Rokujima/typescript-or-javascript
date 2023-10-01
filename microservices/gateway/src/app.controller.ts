import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getHelloUsers(): Promise<string> {
    return this.appService.getHelloUsers();
  }

  @Get('companies')
  async getHelloCompanies(): Promise<string> {
    return this.appService.getHelloCompanies();
  }

  @Get()
  async welcome(): Promise<string> {
    return "Welcome To Nestjs Microservice";
  }
}
