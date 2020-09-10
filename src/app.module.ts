import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Book } from './books/entities/book.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot({ entities: [Book] })],
  controllers: [AppController, BooksController, UsersController],
  providers: [AppService, BooksService, UsersService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
