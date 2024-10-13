import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateReadingProgressDto {
  @ApiProperty({ example: 'bookId' })
  @IsString()
  @IsNotEmpty()
  bookId: string;

  @ApiProperty({ example: 'userId' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 50, description: 'Progress percentage (0-100)' })
  @IsInt()
  @Min(0)
  @Max(100)
  progress: number;
}
