import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({ example: 'Fiction' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
