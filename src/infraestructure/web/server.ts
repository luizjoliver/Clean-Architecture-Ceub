import express from "express";
import { InMemoryBookRepository } from "../repositories/inMemoryBookRepository";
import { AddBookUseCase } from "../../application/useCases/AddBookUseCase";
import { GetBooksUseCase } from "../../application/useCases/GetBookUseCase";
import { BookController } from "../../controllers/BookController";


const app = express();
app.use(express.json());

const bookRepository = new InMemoryBookRepository();
const addBookUseCase = new AddBookUseCase(bookRepository);
const getBooksUseCase = new GetBooksUseCase(bookRepository);
const bookController = new BookController(addBookUseCase, getBooksUseCase);

app.get("/", (req,res) => res.status(200).json({message:"Aplicação arquitetura limpa utilizando node e typescript"}))
app.post("/books", (req, res) => bookController.addBook(req, res));
app.get("/books", (req, res) => bookController.getBooks(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});