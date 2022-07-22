import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    text: String
    done: Boolean!
  }

  type Query {
    todos: [Todo]
    getTodoById(id: ID!): Todo
  }

  input TodoInput {
    title: String!
    text: String!
  }

  input UpdateTodoInput {
    title: String
    text: String
    done: Boolean
  }

  type Mutation {
    addTodo(todo: TodoInput!): Todo
    removeTodo(id: ID!): Todo
    updateTodo(id: ID!, updateTodo: UpdateTodoInput): Todo
  }
`;
