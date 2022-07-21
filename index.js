// const { ApolloServer, gql } = require('apollo-server');
// const uuid = require('uuid')
import express from "express";

import { ApolloServer, gql } from "apollo-server";
import { v4 } from "uuid";
import mongoose from "mongoose";
import { resolvers } from "./src/data/resolvers.js";
import { typeDefs } from "./src/data/schema.js";
import { PORT } from "./src/config/config.js";

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

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   csrfPrevention: true,
//   cache: "bounded",
// });

// // const server = new ApolloServer({
// //   typeDefs,
// //   resolvers,
// //   csrfPrevention: true,
// //   cache: 'bounded'
// // })

// const app = express();
// await server.start();

// server.applyMiddleware({ app, path: "/graphql" });

// app.get("/", (req, res) => {
//   console.log("Apollo GraphQL Express server is ready");
// });

// server
//   .listen()
//   .then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
//   })
//   .then(() => {
//     mongoose.connect(DB_URL, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//   })
//   .then(() => {
//     console.log(`🚀 Database success connection`);
//   });

// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     csrfPrevention: true,
//     cache: "bounded",
//   });

//   const app = express();
//   await server.start();
//   server.applyMiddleware({ app, path: "/" });

//   app.get("/", (req, res) => {
//     console.log("Apollo GraphQL Express server is ready");
//   });

//   app.listen(() => {
//     console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
//   });
// }

// startApolloServer();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

// const app = express();
// // await server.start();

// server.applyMiddleware({ app, path: "/graphql" });

// The `listen` method launches a web server.
server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .then(() => {
    console.log(`🚀 Database success connection`);
  });
