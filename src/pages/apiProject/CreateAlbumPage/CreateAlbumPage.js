import { useEffect, useState } from "react"
import { API_URL } from "../../../config"
import { useNavigate } from "react-router-dom"

const CreateAlbumPage = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('empty')

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`${API_URL}/users`)
      const data = await res.json()

      setUsers(data)
    }

    getUsers()
  }, [])

  const titleHandler = event => setTitle(event.target.value)
  const userHandler = event => setUser(event.target.value)

  const createAlbumHandler = async event => {
    event.preventDefault()

    const newAlbum = {
      userId: user,
      title
    }

    const res = await fetch(`${API_URL}/albums`, {
      method: 'POST',
      body: JSON.stringify(newAlbum),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  
    const createdAlbum = await res.json()
    navigate(`/api-project/albums/${createdAlbum.id}`)
  }

  return (
    <div>
      <h1>Create new album</h1>

      <form onSubmit={createAlbumHandler}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={titleHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="user">User:</label>
          <select id="user" name="user" value={user} onChange={userHandler}>
            <option disabled value="empty">------Select a user-------</option>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
        </div>

        <button type="submit" disabled={user === 'empty'}>Create new album</button>
      </form>
    </div>
  )
}

export default CreateAlbumPage

