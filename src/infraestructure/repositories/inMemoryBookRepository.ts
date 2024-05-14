import { IBookRepository } from "../../application/interfaces/IBookRepository";
import { Book } from "../../domain/entities/Book";

export class InMemoryBookRepository implements IBookRepository {
    private books: Book[] = [];

    async add(book: Book): Promise<void> {
        this.books.push(book);
    }

    async getAll(): Promise<Book[]> {
        return this.books;
    }
}