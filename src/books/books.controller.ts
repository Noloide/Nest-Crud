import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  findOneBook(@Param('id') id): Promise<Book> {
    return this.booksService.findOneBook(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.createBook(createBookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id): Promise<void> {
    return this.booksService.deleteBook(id);
  }

  @Put(':id')
  updateBook(
    @Body() updateBookDto: CreateBookDto,
    @Param('id') id,
  ): Promise<void> {
    return this.booksService.updateBook(id, updateBookDto);
  }
}
