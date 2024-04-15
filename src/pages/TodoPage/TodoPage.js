import { useState } from "react"
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoList from "../../components/TodoList/TodoList"

const TodoPage = () => {
  const INITIAL_DATA = [
    {
      title: 'Task 1',
      description: 'Description 1',
      dueDate: '2024-04-20',
      id: Math.random(),
      done: false,
      dateCreated: '2024-04-15'
    },
    {
      title: 'Task 2',
      description: 'Description 2',
      dueDate: '2024-04-20',
      id: Math.random(),
      done: true,
      dateCreated: '2024-04-15'
    },
    {
      title: 'Task 3',
      description: 'Description 3',
      dueDate: '2024-04-20',
      id: Math.random(),
      done: false,
      dateCreated: '2024-04-15'
    },
  ]

  const [todos, setTodos] = useState(INITIAL_DATA)
  const [editTodo, setEditTodo] = useState(null)

  const newTodoHandler = newTodo => setTodos(prevState => [newTodo, ...prevState])

  const doneTodoHandler = id => {
    setTodos(prevState => {
      const newState = prevState.map(item => {
        if (item.id === id) {
          const newTodo = {...item, done: !item.done}
          return newTodo
        }

        return item
      })

      return newState
    })
  }

  const removeTodoHandler = id => setTodos(prevState => prevState.filter(todo => todo.id !== id))

  const editTodoHandler = id => {
    const clickedTodo = todos.find(todo => todo.id === id)
    setEditTodo(clickedTodo)
  }

  const updateTodoHandler = updatedTodo => {
    setTodos(prevState => {
      // const updateTodoIndex = prevState.findIndex(todo => todo.id === updatedTodo.id)

      // if (updateTodoIndex === -1) {
      //   return prevState
      // }

      // const updatedState = [...prevState]
      // updatedState.splice(updateTodoIndex, 1, updatedTodo)


      const updatedState = prevState.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
      return updatedState
    })

    setEditTodo(null)
  }

  return (
    <div>

      <TodoForm onTodoUpdate={updateTodoHandler} onNewTodo={newTodoHandler} editTodo={editTodo} />

      <TodoList data={todos} onDoneTask={doneTodoHandler} onRemoveTask={removeTodoHandler} onEditTask={editTodoHandler} />

    </div>
  )
}

export default TodoPage

