import { useEffect, useState } from "react"
import { API_URL } from "../../../config"

const PostForm = ({ onPostSubmit, editPostData }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [user, setUser] = useState('empty')

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(API_URL + '/users')
      const usersData = await res.json()

      setUsers(usersData)

      if (editPostData) {
        setTitle(editPostData.title)
        setBody(editPostData.body)
        setUser(editPostData.userId)
      }
    }

    getUsers()
  }, [editPostData])

  const titleHandler = event => setTitle(event.target.value)
  const bodyHandler = event => setBody(event.target.value)
  const userHandler = event => setUser(event.target.value)

  const submitHandler = async (event) => {
    event.preventDefault()
    
    const post = {
      title,
      body,
      userId: user
    }

    onPostSubmit(post)
  }

  return (
    <form onSubmit={submitHandler}>
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

      <button type="submit" disabled={user === 'empty' ? true : false}>Create Post</button>
    </form>
  )
}

export default PostForm