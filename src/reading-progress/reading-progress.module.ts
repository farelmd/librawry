import { Module } from '@nestjs/common';
import { ReadingProgressService } from './reading-progress.service';
import { ReadingProgressController } from './reading-progress.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [ReadingProgressService, PrismaService],
  controllers: [ReadingProgressController]
})
export class ReadingProgressModule {}
