import { Test, TestingModule } from '@nestjs/testing';
import { DevopsNestjsController } from './devops-nestjs.controller';
import { DevopsNestjsService } from './devops-nestjs.service';

describe('DevopsNestjsController', () => {
  let devopsNestjsController: DevopsNestjsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DevopsNestjsController],
      providers: [DevopsNestjsService],
    }).compile();

    devopsNestjsController = app.get<DevopsNestjsController>(DevopsNestjsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(devopsNestjsController.getHello()).toBe('Hello World!');
    });
  });
});
