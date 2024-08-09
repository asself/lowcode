import { Injectable } from '@nestjs/common';

@Injectable()
export class DevopsNestjsService {
  getHello(): string {
    return 'Hello World!';
  }
}
