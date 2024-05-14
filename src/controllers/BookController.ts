import { Request, Response } from "express";
import { AddBookUseCase } from "../application/useCases/AddBookUseCase";
import { GetBooksUseCase } from "../application/useCases/GetBookUseCase";
import { Book } from "../domain/entities/Book";


export class BookController {
    constructor(
        private addBookUseCase: AddBookUseCase,
        private getBooksUseCase: GetBooksUseCase
    ) {}

    async addBook(req: Request, res: Response): Promise<void> {
        const { id, title, author } = req.body;
        const book = new Book(id, title, author);
        await this.addBookUseCase.execute(book);
        res.status(201).send(book);
    }

    async getBooks(req: Request, res: Response): Promise<void> {
        const books = await this.getBooksUseCase.execute();
        res.status(200).send(books);
    }
}