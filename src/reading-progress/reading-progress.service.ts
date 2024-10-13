import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReadingProgressService {
    constructor(private readonly prisma: PrismaService) {}

  async create(readingProgressData: {userId: string, bookId: string, progress: number}) {
    const {userId, bookId, progress} = readingProgressData;
    return this.prisma.readingProgress.create({
      data: {
        userId,
        bookId,
        progress,
      },
    });
  }

  async findAll() {
    return this.prisma.readingProgress.findMany();
  }

  async findOne(id: string) {
    return this.prisma.readingProgress.findUnique({ where: { id } });
  }

  async update(id: string, readingProgressData: any) {
    const { progress } = readingProgressData;
    return this.prisma.readingProgress.update({
      where: { id },
      data: { progress },
    });
  }

  async remove(id: string) {
    return this.prisma.readingProgress.delete({ where: { id } });
  }
}
