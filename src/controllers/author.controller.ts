import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const authorClient = new PrismaClient().author;
// getAll
export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await authorClient.findMany({
      include: {
        books: true,
      },
    });
    res.status(200).json({ data: authors });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};

// getOne
export const getOneAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = parseInt(req.params.id);
    const author = await authorClient.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });
    res.status(200).json({ data: author });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};
// create
export const createAuthor = async (req: Request, res: Response) => {
  try {
    const authorData = req.body;
    const newAuthor = await authorClient.create({
      data: authorData,
    });
    res.status(201).json({ data: newAuthor });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};
// update
export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const authorData = req.body;
    const authorId = parseInt(req.params.id);
    const author = await authorClient.update({
      where: {
        id: authorId,
      },
      data: authorData
    });
    res.status(200).json({ data: author });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid request" });
  }
};

// delete
export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = parseInt(req.params.id);
    const author = await authorClient.delete({
      where: {
        id: authorId,
      },
    });
    res.status(204).json("Author has been successfully deleted");
  } catch (e) {
    console.log(e);
  }
};
