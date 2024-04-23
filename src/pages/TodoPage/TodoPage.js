import { useEffect, useState } from "react"
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

  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('http://localhost:3000/todos')
      const data = await res.json()

      setTodos(data.reverse())
    }

    getTodos()
  }, [])

  const newTodoHandler = async newTodo => {
    const res = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const createdTodo = await res.json()

    setTodos(prevState => [createdTodo, ...prevState])
  }

  const doneTodoHandler = async todo => {
    const res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        done: !todo.done
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const updatedTask = await res.json()
    console.log(updatedTask)

    setTodos(prevState => prevState.map(item => item.id === updatedTask.id ? updatedTask : item))
  }

  const removeTodoHandler = id => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })

    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  const editTodoHandler = id => {
    const clickedTodo = todos.find(todo => todo.id === id)
    setEditTodo(clickedTodo)
  }

  const updateTodoHandler = async updatedTodo => {
    const res = await fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const editedTodo = await res.json()

    setTodos(prevState => {
      // const updateTodoIndex = prevState.findIndex(todo => todo.id === updatedTodo.id)

      // if (updateTodoIndex === -1) {
      //   return prevState
      // }

      // const updatedState = [...prevState]
      // updatedState.splice(updateTodoIndex, 1, updatedTodo)


      const updatedState = prevState.map(todo => todo.id === editedTodo.id ? editedTodo : todo)
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

