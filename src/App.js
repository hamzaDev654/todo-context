import "./App.css";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";


function App() {
  return (
    <div className="App">
    <section id="todo-form">
    <TodoAdd />
    </section>
    <section id="todoItem">
      <TodoList/>
    </section>
    </div>
  );
}

export default App;
