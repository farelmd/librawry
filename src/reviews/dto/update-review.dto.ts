import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, Min, Max } from 'class-validator';

export class UpdateReviewDto {
  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ example: 'This book is amazing!' })
  @IsString()
  @IsNotEmpty()
  comment: string;
}
