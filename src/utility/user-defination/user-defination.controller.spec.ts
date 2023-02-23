import { Test, TestingModule } from '@nestjs/testing';
import { UserDefinationController } from './user-defination.controller';

describe('UserDefinationController', () => {
  let controller: UserDefinationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDefinationController],
    }).compile();

    controller = module.get<UserDefinationController>(UserDefinationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
