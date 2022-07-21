import mongoose from "mongoose";
import { environment } from "../config/config";
import { todoSchema } from "./schema/todoSchema.js";
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
 **/

mongoose
  .connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`🚀 Database success connection`);
  });

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

const Todo = mongoose.model("Todo", todoSchema);

export { Todo };
