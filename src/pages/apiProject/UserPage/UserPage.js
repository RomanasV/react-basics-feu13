import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PostsList from "../../../components/apiProject/PostsList/PostsList"
import AlbumsList from "../../../components/apiProject/AlbumsList/AlbumsList"
import { API_URL } from "../../../config"

const UserPage = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [albums, setAlbums] = useState([])

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

  return (
    <div>
      <h1>{id}. {name}</h1>

      <PostsList data={posts} title={`Posts of ${name}:`} />
      
      <AlbumsList data={albums} title={`Albums of ${name}:`} />
    </div>
  )
}

export default UserPage