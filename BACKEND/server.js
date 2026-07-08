import express from "express";
import "dotenv/config";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import mongoose, { connect } from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());

app.use("/api",chatRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    connectDB();
});

const connectDB = async () => {
    console.log("Connecting to MongoDB...");


    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log("✅ Connected to database");
    } catch (err) {
        console.error("❌ Failed to connect");
        console.error(err);
    }
};


