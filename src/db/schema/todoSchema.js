import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema({
  // id:    { type: String,  required: true  },
  title: { type: String, required: true },
  text: { type: String },
  done: { type: Boolean, required: true },
});

// const Todos = new mongoose.Schema({
//   todos:Todo[]
// })
