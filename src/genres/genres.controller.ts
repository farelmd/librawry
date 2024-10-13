import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, NotFoundException } from '@nestjs/common';
import { GenresService } from './genres.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../roles/roles.decorator';
import { RolesGuard } from '../roles/roles.guard';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Post()
  async create(@Body() createGenreDto: CreateGenreDto) {
    const genre = await this.genresService.create(createGenreDto.name);
    return {
        status: 'success',
        message: 'Genre created successfully',
        data: genre,
      };
  }

  @Get()
  async findAll() {
    const genres = await this.genresService.findAll();
    
    return {
        status: 'success',
        message: 'Genres retrieved successfully',
        data: genres,
      };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const genre = await this.genresService.findOne(id);
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
    return {
        status: 'success',
        message: 'Genre retrieved successfully',
        data: genre,
      };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    const genre = await this.genresService.update(id, updateGenreDto.name);
    return {
        status: 'success',
        message: 'Genre updated successfully',
        data: genre,
      };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.genresService.remove(id);
    return {
        status: 'success',
        message: 'Genre deleted successfully',
      };
  }
}
