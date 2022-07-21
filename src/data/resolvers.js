export const resolvers = {
  Query: {
    todos: () => todos,
    todo: (_, {id}) => {
      return getTodoById(id)
    }
  },
  Mutation: {
    addTodo: (_, { todo }) => {
      return addTodo(todo);
    },
    removeTodo: (_, { id }) => {
      return removeTodo(id);
    },
    // updateTodo: (_, { id, todo }) => {
    //   return updateTodo(id, todo);
    // }
  }
};