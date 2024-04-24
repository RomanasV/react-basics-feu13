import { useEffect, useState } from "react"
import { API_URL } from "../../config"

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [user, setUser] = useState('empty')

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(API_URL + '/users')
      const usersData = await res.json()

      setUsers(usersData)
    }

    getUsers()
  }, [])

  const titleHandler = event => setTitle(event.target.value)
  const bodyHandler = event => setBody(event.target.value)
  const userHandler = event => setUser(event.target.value)

  const postHandler = async (event) => {
    event.preventDefault()
    
    const newPost = {
      title,
      body,
      userId: user
    }

    const res = await fetch(API_URL + '/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const createdPost = await res.json()

    console.log(createdPost)

    setTitle('')
    setBody('')
    setUser('empty')
  }

  return (
    <div>
      <form onSubmit={postHandler}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={title} onChange={titleHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="body">Content</label>
          <textarea name="body" id="body" value={body} onChange={bodyHandler}></textarea>
        </div>

        <div className="form-control">
          <label htmlFor="user">User</label>
          <select id="user" name="user" value={user} onChange={userHandler}>
            <option value="empty" disabled>---Select A User---</option>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost