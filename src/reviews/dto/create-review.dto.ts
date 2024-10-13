import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({ example: 'bookId' })
  @IsString()
  @IsNotEmpty()
  bookId: string;

  @ApiProperty({ example: 'userId' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'This book is amazing!' })
  @IsString()
  comment: string;

  @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
