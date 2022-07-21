import Todo from './Todo.js'


class TodoService {
  async create(todo){
    const newTodo = await Todo.create({...todo})
    return newTodo;
  }

  async getAll() {
    const todos = await Todo.find();
    return todos;
  }
}