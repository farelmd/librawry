import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Roles } from '../roles/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const book = await this.booksService.create(createBookDto);
    return {
        status: 'success',
        message: 'Book created successfully',
        data: book,
    };
  }

  @Get()
  async findAll() {
    const books = await this.booksService.findAll();
    return {
        status: 'success',
        message: 'Books retrieved successfully',
        data: books.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
            genres: book.genres.map(genre => genre.name), // Ambil nama genre
          })),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const book = await this.booksService.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return {
        status: 'success',
        message: 'Book retrieved successfully',
        data: {
            id: book.id,
            title: book.title,
            author: book.author,
            genres: book.genres.map(genre => genre.name),
          },
    };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    const book = await this.booksService.update(id, updateBookDto);
    return {
        status: 'success',
        message: 'Book updated successfully',
        data: book,
    };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.booksService.remove(id);
    return {
        status: 'success',
        message: 'Book removed successfully'
    };
  }
}
