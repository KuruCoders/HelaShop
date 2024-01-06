import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.MONGO_URL;
const db = async () => {
    try {
        mongoose.connect(URL);
        const { connection } = mongoose;
        connection.once("open", () => {
            console.log("Connected To MongoDB");
        })
    } catch (error) {
        console.log("Error Connecting DB " + error);
    }
}

export default db;