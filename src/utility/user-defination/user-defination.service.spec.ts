import { Test, TestingModule } from '@nestjs/testing';
import { UserDefinationService } from './user-defination.service';

describe('UserDefinationService', () => {
  let service: UserDefinationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDefinationService],
    }).compile();

    service = module.get<UserDefinationService>(UserDefinationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
