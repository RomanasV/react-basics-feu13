import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../../../config"

const AlbumPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const getAlbum = async () => {
      const res = await fetch(`${API_URL}/albums/${id}`)
      const data = await res.json()

      setAlbum(data)
    }

    getAlbum()
  }, [id])

  if (!album) {
    return (
      <p>Loading...</p>
    )
  }
  
  const deleteAlbumHandler = () => {
    fetch(`${API_URL}/albums/${id}`, {
      method: 'DELETE',
    })

    navigate('/api-project/albums')
  }

  const deletePhoto = id => {
    fetch(`${API_URL}/photos/${id}`, {
      method: 'DELETE',
    });
  }

  return (
    <div>
      <button onClick={deleteAlbumHandler}>Delete Album</button>
      <h1>{album.id}. {album.title}</h1>
    </div>
  )
}

export default AlbumPage