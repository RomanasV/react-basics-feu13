const TodoItem = ({ data, onDoneTask, onRemoveTask, onEditTask }) => {
  const { title, description, done, dueDate, id } = data

  const doneHandler = () => onDoneTask(data)
  const removeHandler = () => onRemoveTask(id)
  const editHandler = () => onEditTask(id)

  return (
    <div className="todo-item">
      <h3 className="todo-title">{title}</h3>
      <p className="todo-description">{description}</p>
      <span className="todo-due-date">Due date: {dueDate}</span>

      <div className="input-wrapper">
        <input type="checkbox" name="done" id={`done-${id}`} checked={done} onChange={doneHandler} />
        <label htmlFor={`done-${id}`}>Done</label>
      </div>

      <button onClick={removeHandler}>Remove Task</button>
      <button onClick={editHandler}>Edit Task</button>
    </div>
  )
}

export default TodoItem