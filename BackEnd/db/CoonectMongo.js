import mongoose from "mongoose";
import { env } from 'node:process';
import dotenv from "dotenv"
dotenv.config();
const connectToMongo = async ()=>{
    try {
        await mongoose.connect(env.Mongo);
        console.log("connected to mongodb");
    } catch (error) {
       
        console.log("error   connecting to mongo .",error.message)
    }
}
export default connectToMongo;