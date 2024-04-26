import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import PostsList from "../../../components/apiProject/PostsList/PostsList"
import AlbumsList from "../../../components/apiProject/AlbumsList/AlbumsList"
import { API_URL } from "../../../config"

const UserPage = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [albums, setAlbums] = useState([])
  const [userIsDeleted, setUserIsDeleted] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const userRes = await fetch(`${API_URL}/users/${id}`)
      const userData = await userRes.json()

      setUser(userData)

      const postsRes = await fetch(`${API_URL}/posts?_embed=comments&userId=${id}`)
      const postsData = await postsRes.json()

      setPosts(postsData)

      const albumsRes = await fetch(`${API_URL}/albums?userId=${id}`)
      const albumsData = await albumsRes.json()

      setAlbums(albumsData)
    }

    getData()
  }, [id])

  if (!user) {
    return <p>Loading...</p>
  }

  const { name, address, email, phone, website } = user

  const deleteUserHandler = () => {
    fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
    })

    setUserIsDeleted(true)
  }

  if (userIsDeleted) {
    return (
      <div>
        <h2>User was removed</h2>
        <Link to="/api-project/users">Go back to users page</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="user-controls">
        <button onClick={deleteUserHandler}>Remove User</button>
        <Link to={`/api-project/edit-user/${id}`}>Edit User</Link>
      </div>

      <h1>{id}. {name}</h1>

      <PostsList data={posts} title={`Posts of ${name}:`} />
      
      <AlbumsList data={albums} title={`Albums of ${name}:`} />
    </div>
  )
}

export default UserPage