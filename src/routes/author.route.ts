import { Router } from "express";
import { createAuthor, deleteAuthor, getAllAuthors, getOneAuthor, updateAuthor } from "../controllers/author.controller";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getOneAuthor);
authorRouter.post("/create", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/delete/:id", deleteAuthor);
export default authorRouter;
