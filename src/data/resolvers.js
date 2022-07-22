import { Todo } from "../db/dbConnector.js";
import { v4 } from "uuid";

export const resolvers = {
  Query: {
    todos: async () => {
      return await Todo.find();
    },
    getTodoById: async (_, { id }) => {
      try {
        const todo = await Todo.findById({ _id: id });
        if (!todo) throw new Error("не найден ID");
        return todo;
      } catch (e) {
        return e.message;
      }
    },
  },
  Mutation: {
    addTodo: async (_, { todo }) => {
      try {
        const newTodo = new Todo({ ...todo, done: false });
        const addedTodo = await newTodo.save();
        return addedTodo;
      } catch (error) {
        return error;
      }
    },
    removeTodo: async (_, { id }) => {
      try {
        const todo = await Todo.findByIdAndDelete({ _id: id });
        if (!todo) throw new Error("не найден ID");
        return todo;
      } catch (e) {
        return e.message;
      }
    },

    updateTodo: async (_, { id, updateTodo }) => {
      try {
        const todo = await Todo.findByIdAndUpdate(id, updateTodo, {
          new: true,
        });

        if (!todo) throw new Error("не найден ID");
        return todo;
      } catch (e) {
        return e.message;
      }
    },
  },
};
