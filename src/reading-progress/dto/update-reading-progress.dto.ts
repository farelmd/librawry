import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max } from 'class-validator';

export class UpdateReadingProgressDto {
  @ApiProperty({ example: 50, description: 'Reading progress in percentage (0-100)' })
  @IsInt()
  @Min(0)
  @Max(100)
  progress: number;
}
