import express from "express";
import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "./src/data/resolvers.js";
import { typeDefs } from "./src/data/schema.js";

// let todos = [
//   {
//     id: "ID-1",
//     title: "Todo 1",
//     text: "Text 1",
//     done: false
//   },
//   {
//     id: "ID-2",
//     title: "Todo 2",
//     text: "Text 2",
//     done: false
//   },
//   {
//     id: "ID-3",
//     title: "Todo 3",
//     text: "Text 3",
//     done: false
//   },
// ]

// const getTodoById = (id) => {

//   const [todo] = todos.filter((todo) => todo.id === id)
//   return todo;
// };
// const addTodo = ({title, text}) => {
//   const newTodo = { id: v4(), title, text, done: false }

//   console.log(newTodo);
//   return newTodo;
// };
// const removeTodo = ({id}) => {
//   let removedTodo = null
//   let removedTodoIndex = null
//   for (const [index, todo] of Object.entries(todos)) {
//     if(todo.id === id) {
//       removedTodoIndex = index
//       removedTodo = todo
//     }
//   }
//   console.log(todo);
//   if (todo) {
//     todos = todos.filter((todo) => todo.id !== id)
//   }

//   return todo;
// };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
// .then(() => {
//   console.log(`🚀 Database success connection`);
// });
