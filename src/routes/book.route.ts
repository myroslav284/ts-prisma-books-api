import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getOneBook);
bookRouter.post("/create", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);

export default bookRouter;
