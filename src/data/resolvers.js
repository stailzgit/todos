import { Todo } from "../db/dbConnector.js";
import { v4 } from "uuid";

export const resolvers = {
  Query: {
    todos: async () => {
      return await Todo.find();
    },
    getTodoById: async (_, { id }) => {
      try {
        const todo = await Todo.findById(id);
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
        const newTodo = new Todo({ ...todo, id: v4(), done: false });
        const addedTodo = await newTodo.save();
        return addedTodo;
      } catch (error) {
        return error;
      }
    },
    removeTodo: (_, { id }) => {
      return removeTodo(id);
    },

    // updateTodo: (_, { id, todo }) => {
    //   return updateTodo(id, todo);
    // }
  },
};
