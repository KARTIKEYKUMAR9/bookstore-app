import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
