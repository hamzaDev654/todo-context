import { useReducer } from "react";
import TodoContext from "./TodoContext";
import todoReducer from "./TodoReducer";
const initialState = [];
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTask = (todoInput) => {
    dispatch({ type: "ADD", todoInput });
  };

  const updateTask = (todo) => {
    dispatch({ type: "UPDATE", todo });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE", id });
  };


  //   console.log(state);
  let todoValue = {
    tasks: state,
    addTask,
    updateTask,
    deleteTask
  };

  return (
    <TodoContext.Provider value={todoValue}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
