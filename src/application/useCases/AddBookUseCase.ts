import { IBookRepository } from "../interfaces/IBookRepository";
import { Book } from "../../domain/entities/Book";

export class AddBookUseCase {
    constructor(private bookRepository: IBookRepository) {}

    async execute(book: Book): Promise<void> {
        return this.bookRepository.add(book);
    }
}