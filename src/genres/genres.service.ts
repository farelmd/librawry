import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Pastikan ada PrismaService

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string) {
    return this.prisma.genre.create({
      data: { name },
    });
  }

  async findAll() {
    return this.prisma.genre.findMany();
  }

  async findOne(id: string) {
    return this.prisma.genre.findUnique({ where: { id } });
  }

  async update(id: string, name: string) {
    return this.prisma.genre.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: string) {
    return this.prisma.genre.delete({ where: { id } });
  }
}
