import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAll(): Promise<Book[]>;
    findOneBook(id: any): Promise<Book>;
    createBook(createBookDto: CreateBookDto): Promise<Book>;
    deleteBook(id: any): Promise<void>;
    updateBook(updateBookDto: CreateBookDto, id: any): Promise<void>;
}
