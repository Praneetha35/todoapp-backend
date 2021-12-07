import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'test/html')
  getHello(): {name: string} {
      return {name: 'TO DO APP'};
    // return this.appService.getHello();
  }
}
  