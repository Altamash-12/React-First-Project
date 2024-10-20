import { useState } from "react";
import "./App.css";
import TodoItem from "./components/card.jsx";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [pendingTodos, setPendingTodo] = useState([]);
  const [completedTodos, setCompletedTodo] = useState([]);
  const [buttonText, setButtonText] = useState("Create todo");
  const [allTodos, allTodo] = useState([]);
  const [element, setElement] = useState(null);
  const [error, setError] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);

  function createTodoHandler(e) {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setError("");
      if (buttonText === "Update todo") {
        updateTextChange();
        setButtonText("Create Todo");
        setSelectedTodo(null);
      } else {
        let todoCopy = [...todos];
        let obj = {};
        obj.id = Math.ceil(Math.random() * 100)
        obj.status = "card";
        obj.text = inputText;
        todoCopy.push(obj);
        setTodos(todoCopy);
        allTodo(todoCopy)
        setInputText("");
      }
    } else {
      setError("Please Enter Text!!!");
    }
  }

  function inputChangeHandler(e) {
    setInputText(e.target.value);
  }

  function todoDeleteHandler(id) {
    let filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  function updateTodo(id) {
    let selectedTodo = todos.filter((todo) => todo.id === id)[0];
    setSelectedTodo(selectedTodo);
    setInputText(selectedTodo.text);
    setButtonText("Update todo");
  }

  function updateTextChange() {
    selectedTodo.text = inputText;
    setInputText("");
  }

  function todoCompletedHandler(id) {
    let selectedTodo = todos.filter((todo) => todo.id === id)[0];
    selectedTodo.status = "card-completed"
    let completedTodoCopy = [...completedTodos];
    completedTodoCopy.push(selectedTodo);
    setCompletedTodo(completedTodoCopy);
  }

  function todoPendingHandler(id) {
    let selectedTodo = todos.filter((todo) => todo.id === id)[0];
    selectedTodo.status = "card-pending"
    let pendingTodoCopy = [...pendingTodos];
    pendingTodoCopy.push(selectedTodo)
    setPendingTodo(pendingTodoCopy);
    console.log(selectedTodo);
  }

  function ayan(e) {
    if (e.target.value === "Pending") {
      setTodos(pendingTodos);
    } else if (e.target.value === "Completed") {
      setTodos(completedTodos);
    } else {
      setTodos(allTodos);
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
        <button className="createTodoBtn" onClick={createTodoHandler}>
          {buttonText}
        </button>
        <div className="select-container">
          <select onChange={(e) => ayan(e)}>
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </form>
      <p className="error">{error}</p>
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
