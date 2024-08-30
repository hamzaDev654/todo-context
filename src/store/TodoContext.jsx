import { createContext } from "react";

const TodoContext = createContext({
  tasks: [],
  addTask: (taskInput) => {},
  updateTask: (todoData) => {},
  deleteTask: (id) => {},
  editTask: () => {},
  editCancle: () => {},
});

export default TodoContext;
