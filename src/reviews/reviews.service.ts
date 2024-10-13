import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(reviewData: {userId: string, bookId: string, comment: string, rating: number}) {
    const {userId, bookId, comment, rating} = reviewData;
    return this.prisma.review.create({
      data: {
        userId,
        bookId,
        comment,
        rating,
      },
    });
  }

  async findAll() {
    return this.prisma.review.findMany();
  }

  async findOne(id: string) {
    return this.prisma.review.findUnique({ where: { id } });
  }

  async update(id: string, reviewData: any) {
    const { comment, rating } = reviewData;
    return this.prisma.review.update({
      where: { id },
      data: { comment, rating },
    });
  }

  async remove(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}
