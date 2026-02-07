import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))   //to data from form. Now no need of bodyparser as its built-in in express.
app.use(express.urlencoded({extended:true,limit:"16kb"})) //to accept data from url. extenden is for nested object optional.
app.use(express.static("public")) // for files, folder or images to store in local pubic folder.
app.use(cookieParser())

export {app}