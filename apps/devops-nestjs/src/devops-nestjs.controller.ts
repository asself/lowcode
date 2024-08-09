import { Controller, Get } from '@nestjs/common';
import { DevopsNestjsService } from './devops-nestjs.service';

@Controller()
export class DevopsNestjsController {
  constructor(private readonly devopsNestjsService: DevopsNestjsService) {}

  @Get()
  getHello(): string {
    return this.devopsNestjsService.getHello();
  }
}
