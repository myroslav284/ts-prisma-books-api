import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use("/", (req, res)=>{
    res.json({message: "success"});
})
app.listen(PORT, ()=>{
    console.log("Server is running on port "+ PORT);
});
