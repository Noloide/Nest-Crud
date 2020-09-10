import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    getAll(): Promise<Book[]>;
    findOneBook(_id: number): Promise<Book>;
    createBook(book: Book): Promise<Book>;
    deleteBook(_id: number): Promise<void>;
    updateBook(_id: number, book: Book): Promise<void>;
}
