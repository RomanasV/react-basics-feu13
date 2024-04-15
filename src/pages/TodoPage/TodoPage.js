import { useState } from "react"
import TodoForm from "../../components/TodoForm/TodoForm"

const TodoPage = () => {
  const [todos, setTodos] = useState([])

  const newTodoHandler = newTodo => setTodos(prevState => [newTodo, ...prevState])

  return (
    <div>

      <TodoForm onNewTodo={newTodoHandler} />

      {/* <TodoList data={todos} /> */}

    </div>
  )
}

export default TodoPage

