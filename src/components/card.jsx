function TodoItem({todo, id, todoDeleteHandler, updateTodo, todoPendingHandler, todoCompletedHandler}) {
  function deleteHandler(index) {
    todoDeleteHandler(index);
}
  // function updateHandler(todo) {
  //  updateTodo(todo);
  // }

  // function todoPending(e){
  //   todoPendingHandler(e)
  // }

  // function todoCompleted(e){
  //   todoCompletedHandler(e);
  // }

  return (
    <div className="card">
      {todo.text && <p className="todoText">{todo.text}</p>}
      <button className="todo-buttons">
      <button className="edit-btn" onClick={() =>updateHandler(id)}>Edit</button>
      <button className="delete-btn" onClick={() => deleteHandler(id)}>Delete</button>
      <button className="pending" onClick={() =>todoPending(todo.text)}>Pending</button>
      <button className="completed" onClick={() =>todoCompleted(todo.text)}>Completed</button>
      </button>
    </div>
  );
}

export default TodoItem;

