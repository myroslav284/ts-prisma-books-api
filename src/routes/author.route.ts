import { NextFunction, Router } from "express";
import { createAuthor, deleteAuthor, getAllAuthors, getOneAuthor, updateAuthor } from "../controllers/author.controller";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'src/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + path.extname(file.originalname))
    },
    
  });
  
 const upload = multer({ storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
},
 }).single('file');  
const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getOneAuthor);
authorRouter.post("/create", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      // Check if the error is due to the file filter rejecting the file
      if (err.message === 'Only images are allowed') {
        return res.status(400).json({ error: err.message });
      } else if (err instanceof multer.MulterError) {
        // Handle Multer errors
        return res.status(400).json({ error: err.message });
      } else {
        // Other unexpected errors
        return res.status(500).json({ error: "Internal Server Error" });
      }
    } 
    next();
  });
}, createAuthor);
authorRouter.put("/:id",(req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      // Check if the error is due to the file filter rejecting the file
      if (err.message === 'Only images are allowed') {
        return res.status(400).json({ error: err.message });
      } else if (err instanceof multer.MulterError) {
        // Handle Multer errors
        return res.status(400).json({ error: err.message });
      } else {
        // Other unexpected errors
        return res.status(500).json({ error: "Internal Server Error" });
      }
    } 
    next();
  });
}, updateAuthor);
authorRouter.delete("/delete/:id", deleteAuthor);
export default authorRouter;
