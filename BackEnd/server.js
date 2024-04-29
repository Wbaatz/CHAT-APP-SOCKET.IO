
import express from "express";
import AuthRoutes from "./routes/auth.routes.js";
import MessageRoutes from "./routes/message.routes.js";
import UserRoutes from "./routes/user.routes.js";
import cors from "cors";
import connectToMongo from "./db/CoonectMongo.js";
import { env } from 'node:process';
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
dotenv.config();
const app=express();



// app.get('/',(req,res,next)=>{
//    res.send("<h1>Helluo therkre </h1>");
// });

app.use(

    cors({
        origin:"http://localhost:3000",
        credentials:true,
       
    })
);


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",AuthRoutes);
app.use("/api/messages",MessageRoutes);
app.use("/api/users",UserRoutes);




app.listen(env.port,()=> {
   
  
    connectToMongo();
    console.log("Server Running on port ",env.port);
    
});

