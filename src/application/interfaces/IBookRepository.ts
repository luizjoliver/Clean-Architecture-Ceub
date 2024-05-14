import { Book } from "../../domain/entities/Book";

export interface IBookRepository {
    add(book: Book): Promise<void>;
    getAll(): Promise<Book[]>;
}