import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";
const PORT = process.env.PORT || 8080;

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/demo/contacts", contactRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
