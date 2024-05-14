import { IBookRepository } from "../../application/interfaces/IBookRepository";
import { Book } from "../../domain/entities/Book";
import knex from "../db/knex";


export class PostgresBookRepository implements IBookRepository {
  async add(book: Book): Promise<void> {
    await knex("books").insert(book);
  }

  async getAll(): Promise<Book[]> {
    const books = await knex("books").select();
    return books.map((book: any) => new Book(book.id, book.title, book.author));
  }
}