import { useState } from "react";
import "./App.css";
import TodoItem from "./components/card.jsx";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [pendingTodos, setPendingTodo] = useState([]);
  const [completedTodos, setCompletedTodo] = useState([]);
  const [allTodos, addTodo] = useState([]);

  function createTodoHandler(e) {
    if (todoBtn.textContent === "Update todo") {
      updateTextChange();
      todoBtn.textContent = "Create Todo";
    } else {
      let todoCopy = [...todos];
      let obj = {};
      obj.id = Math.ceil(Math.random() * 10)
      obj.status = "pending";
      obj.text = inputText;
      todoCopy.push(obj);
      console.log(todoCopy);

      setTodos(todoCopy)
    }
    e.preventDefault(); 
  }

  function updateTextChange() {
    const todosCopy = [...todos];
    todosCopy.splice(selectedTodo, 1, inputText);
    setTodos(todosCopy);
    setSelectedTodo(null);
    setInputText("");
  }

  function inputChangeHandler(e) {
    setInputText(e.target.value);
  }

  function todoDeleteHandler(index) {
    let todoCopy = [...todos];
    todoCopy.splice(index, 1);
    console.log('index', index);
    setTodos(todoCopy);
  }

  const todoBtn = document.querySelector(".createTodoBtn");
  function updateTodo(index) {
    setInputText(todos[index]);
    setSelectedTodo(index);
    todoBtn.textContent = "Update todo";
  }

  function todoCompletedHandler(e) {
    let completedTodoCopy = [...completedTodos];
    completedTodoCopy.push(e);
    setCompletedTodo(completedTodoCopy);
  }

  function todoPendingHandler(e) {
    let penndingTodoCopy = [...pendingTodos];
    penndingTodoCopy.push(e);
    setPendingTodo(penndingTodoCopy);
  }

  function ayan(e) {
    if (e.target.value === "Pending") {
     setTodos(pendingTodos)
    } else if (e.target.value === "Completed") {
     setTodos(completedTodos)
    } else{
      setTodos(allTodos)
    }
  }

  return (
    <div className="App">
    <h1>Create your todo list</h1>
      <form className="todo-line" onSubmit={createTodoHandler}>
        <input
          onChange={(e) => inputChangeHandler(e)}
          value={inputText}
          placeholder="What are your tasks for today?"
        />
        <button className="createTodoBtn">
          Create Todo
        </button>
        <select onChange={(e) => ayan(e)}>
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </form>
      {todos.map((todo, i) => {
        return (
          <TodoItem
            key={i}
            id={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            todoDeleteHandler={todoDeleteHandler}
            todoCompletedHandler={todoCompletedHandler}
            todoPendingHandler={todoPendingHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
