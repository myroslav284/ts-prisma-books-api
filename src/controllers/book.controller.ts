import { Author, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const bookClient = new PrismaClient().book;

type Book = {
    id: number,
    title: string,
    description?: string,
    datePublished?: Date,
    author: Author,
    authorId: number
}
// getAll
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookClient.findMany();
    res.status(200).json({ data: books });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};

// getOne
export const getOneBook = async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      }
    });
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};
// create
export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, description: description, datePublished, authorId }: Book = req.body;
    const newBook = await bookClient.create({
        data: {
            title: title,
            description: description,
            datePublished: datePublished ? new Date(datePublished) : null,
            author: { connect: { id: authorId } }
          }
    });
    res.status(201).json({ data: newBook });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};
// update
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { title, description: description, datePublished, authorId }: Book = req.body; 
    const bookId = parseInt(req.params.id);
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      },
    });
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    const updatedBook = await bookClient.update({
      where: {
        id: bookId,
      },
      data: {
        title: title,
        description: description,
        datePublished: datePublished ? new Date(datePublished) : null,
        author: { connect: { id: authorId } }
      }
    });
    res.status(200).json({ data: updatedBook });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};

// deleteAuthor
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      },
    });
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    await bookClient.delete({
      where: {
        id: bookId,
      },
    });
    res.status(204).json("Book has been successfully deleted");
  } catch (e) {
    console.log(e);
  }
};
