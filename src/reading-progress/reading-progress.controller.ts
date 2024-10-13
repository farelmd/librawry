import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, NotFoundException } from '@nestjs/common';
import { ReadingProgressService } from './reading-progress.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Roles } from '../roles/roles.decorator';
import { CreateReadingProgressDto } from './dto/create-reading-progress.dto';
import { UpdateReadingProgressDto } from './dto/update-reading-progress.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('reading-progress')
@ApiBearerAuth()
export class ReadingProgressController {
  constructor(private readonly readingProgressService: ReadingProgressService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'user')
  @Post()
  async create(@Body() createReadingProgressDto: CreateReadingProgressDto) {
    const readingProgress = await this.readingProgressService.create(createReadingProgressDto);
    return {
        status: 'success',
        message: 'ReadingProgress created successfully',
        data: readingProgress,
    };
  }

  @Get()
  async findAll() {
    const readingProgresss = await this.readingProgressService.findAll();
    return {
        status: 'success',
        message: 'Reading Progress retrieved successfully',
        data: readingProgresss,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const readingProgress = await this.readingProgressService.findOne(id);
    if (!readingProgress) {
      throw new NotFoundException(`Reading Progress with ID ${id} not found`);
    }
    return {
        status: 'success',
        message: 'Reading Progress retrieved successfully',
        data: readingProgress,
    };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'user')
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReadingProgressDto: UpdateReadingProgressDto) {
    const readingProgress = await this.readingProgressService.update(id, updateReadingProgressDto);
    return {
        status: 'success',
        message: 'Reading Progress updated successfully',
        data: readingProgress,
    };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'user')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.readingProgressService.remove(id);
    return {
        status: 'success',
        message: 'Reading Progress removed successfully'
    };
  }
}
