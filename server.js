import express from "express";
// import { postRoutes } from "./routes/post.js";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import bodyParser from "body-parser";
dotenv.config()

const app = express ()
const PORT = 8080;
let DB = process.env.DB;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.json())
// app.use('/api/post', postRoutes)

mongoose.connect("Aca tenes que colocar tu key de mongoose")

app.listen(PORT, () =>{
console.log(`Server listen on http://localhost:${PORT}/api/post`)
})



