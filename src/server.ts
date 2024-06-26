import dotenv from "dotenv"
dotenv.config();
import express from "express"
import authorRouter from "./routes/author.route";
import bookRouter from "./routes/book.route";
import path from "path";
const app = express();
const PORT = process.env.PORT || 3002;
app.use(express.json());

app.use("/uploads",express.static(path.join(__dirname,'uploads')));
app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.listen(PORT, ()=>{  
    console.log("Server is running on port "+ PORT);
});
