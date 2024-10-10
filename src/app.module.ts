import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ReadingProgressModule } from './reading-progress/reading-progress.module';

@Module({
  imports: [UsersModule, AuthModule, BooksModule, GenresModule, ReviewsModule, ReadingProgressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
