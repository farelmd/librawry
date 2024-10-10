import { Test, TestingModule } from '@nestjs/testing';
import { ReadingProgressController } from './reading-progress.controller';

describe('ReadingProgressController', () => {
  let controller: ReadingProgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadingProgressController],
    }).compile();

    controller = module.get<ReadingProgressController>(ReadingProgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
