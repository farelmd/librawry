import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'The Catcher in the Rye' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'J.D. Salinger' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ example: ['genreId1', 'genreId2'], description: 'Array of genre IDs' })
  @IsArray()
  @IsString({ each: true })
  genreIds: string[]; // Genre IDs associated with the book
}
