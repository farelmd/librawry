import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma//prisma.service'; // 

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(bookData: { title: string; author: string; genreIds: string[] }) {
    const { title, author, genreIds } = bookData;
    return this.prisma.book.create({
      data: {
        title,
        author,
        genres: {
          connect: genreIds.map(id => ({ id })),
        },
      },
    });
  }

  async findAll() {
    return this.prisma.book.findMany({
      include: { genres: true }, // Mengambil genre yang terkait
    });
  }

  async findOne(id: string) {
    return this.prisma.book.findUnique({
      where: { id },
      include: { genres: true }, // Mengambil genre yang terkait
    });
  }

  async update(id: string, bookData: any) {
    const { title, author, genreIds } = bookData;
    return this.prisma.book.update({
      where: { id },
      data: {
        title,
        author,
        genres: {
          set: genreIds.map(id => ({ id })), // Mengupdate genre
        },
      },
    });
  }

  async remove(id: string) {
    return this.prisma.book.delete({ where: { id } });
  }
}
