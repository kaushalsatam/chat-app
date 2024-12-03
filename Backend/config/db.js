import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DATABASE_URI;

export const connectToDatabase = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB server!');
    }catch(err){
        console.error(err);
    }
}

export const disconnectFromDatabase = async () => {
    try{
        await mongoose.disconnect();
        console.error("Disconnected from MongoDB server!");
    }catch(err){
        console.log(err);
    }
}