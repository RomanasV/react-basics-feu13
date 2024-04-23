import { useEffect, useState } from "react"

const TodoForm = ({ onNewTodo, editTodo, onTodoUpdate }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title)
      setDescription(editTodo.description)
      setDueDate(editTodo.dueDate)
    }
  }, [editTodo])

  const titleHandler = event => setTitle(event.target.value)
  const descriptionHandler = event => setDescription(event.target.value)
  const dueDateHandler = event => setDueDate(event.target.value)

  const submitHandler = event => {
    event.preventDefault()

    if (editTodo) {
      // const updatedTodo = { ...editTodo }
      // updatedTodo.title = title
      // updatedTodo.description = description
      // updatedTodo.dueDate = dueDate

      const updatedTodo = {
        ...editTodo,
        title,
        description,
        dueDate
      }

      onTodoUpdate(updatedTodo)
    } else {
      const currentDate = new Date()

      // const day = currentDate.getDate().toString().padStart(2, '0')
      // const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
      // const year = currentDate.getFullYear()

      // const dateCreated = `${year}-${month}-${day}`

      const dateCreated = currentDate.toISOString().slice(0, 10)

      const newTodo = {
        title,
        description,
        dueDate,
        done: false,
        dateCreated
      }

      onNewTodo(newTodo)
    }

    setTitle('')
    setDescription('')
    setDueDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={title} onChange={titleHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={description} onChange={descriptionHandler}></textarea>
      </div>

      <div className="form-control">
        <label htmlFor="date">Due date</label>
        <input type="date" id="date" name="date" value={dueDate} onChange={dueDateHandler} />
      </div>

      <button type="submit">{editTodo ? 'Edit todo' : 'Create todo'}</button>
    </form>
  )
}

export default TodoForm


// 2.4. Sukūrimo datą (prisideda automatiškai)
