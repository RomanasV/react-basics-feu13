import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({ data, onDoneTask, onRemoveTask, onEditTask }) => {
  return (
    <div className="todo-wrapper">
      {data.length > 0 ? (
        <div className="todo-list">
          {data.map((todo, index) => <TodoItem onEditTask={onEditTask} onRemoveTask={onRemoveTask} onDoneTask={onDoneTask} key={index} data={todo} />)}
        </div>
      ) : (
        <h2>No todos yet...</h2>
      )}
    </div>
  )
}

export default TodoList