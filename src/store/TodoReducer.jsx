const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length + 1,
          task: action.todoInput,
          isEdit: false,
          done:false
        },
      ];

    case "UPDATE":
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
        } else {
          return todo;
        }
      });

    case "DELETE":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
};

export default TodoReducer;
