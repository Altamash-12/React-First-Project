import { useRef } from 'react';

function TodoItem({todo, id, todoDeleteHandler, updateTodo, todoPendingHandler, todoCompletedHandler}) {

  const todoTextRef = useRef(null);
  const pendingBtnRef = useRef(null);
  const completedBtnRef = useRef(null);

  function deleteHandler(id) {
    todoDeleteHandler(id);
}

  function updateHandler(id) {
   updateTodo(id);
  }

  function todoPending(id){
    todoPendingHandler(id);
    todoTextRef.current.style.color = "#fff6ee"
    pendingBtnRef.style.textDecoration = "underline"
  }

  function todoCompleted(id){
    todoCompletedHandler(id);
    todoTextRef.current.style.color = "#e68327";
    completedBtnRef.style.textDecoration = "underline"
  }

  return (
    <div className={todo.status}>
      {todo.text && <p className="todoText" ref={todoTextRef}>{todo.text}</p>}
      <div className="todo-buttons">
      <button className="edit-btn" onClick={() =>updateHandler(id)}>Edit</button>
      <button className="delete-btn" onClick={() => deleteHandler(id)}>Delete</button>
      <button className="pending" onClick={() =>todoPending(id)} ref={pendingBtnRef}>Pending</button>
      <button className="completed" onClick={() =>todoCompleted(id)} ref={completedBtnRef} >Completed</button>
      </div>
    </div>
  );
}

export default TodoItem;

