import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  id:    { type: String,  required: true  },
  title: { type: String,  required: true  },
  text:  { type: String                  },
  done:  { type: Boolean, required: true },
});

// const Todos = new mongoose.Schema({
//   todos:Todo[]
// })

export default mongoose.model("Todo", Todo);
