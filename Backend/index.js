import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(express.json());


app.use(
  cors({
    origin: process.env.CLIENT_URL, // your frontend URL from .env
    credentials: true,              // allow cookies, auth headers
  })
);

const PORT = process.env.PORT || 4001;
// const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose.connect(process.env.MongoDBURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// defining routes
app.use("/books", bookRoute);
app.use("/users", userRoute);

// console.log("PORT",process.env.PORT);
// console.log("MONGO",process.env.MongoDBURI);
// console.log("ClIENT_URL",process.env.CLIENT_URL);


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});