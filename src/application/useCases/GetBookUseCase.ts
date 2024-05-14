import { IBookRepository } from "../interfaces/IBookRepository";
import { Book } from "../../domain/entities/Book";

export class GetBooksUseCase {
    constructor(private bookRepository: IBookRepository) {}

    async execute(): Promise<Book[]> {
        return this.bookRepository.getAll();
    }
}