import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../../../config"

const AlbumPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [album, setAlbum] = useState(null)

  const [photoTitle, setPhotoTitle] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [photoThumbnailUrl, setPhotoThumbnailUrl] = useState('')

  const photoTitleHandler = event => setPhotoTitle(event.target.value)
  const photoUrlHandler = event => setPhotoUrl(event.target.value)
  const photoThumbnailUrlHandler = event => setPhotoThumbnailUrl(event.target.value)

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

  const newPhotoHandler = async event => {
    event.preventDefault()

    const newPhoto = {
      albumId: id,
      title: photoTitle,
      url: photoUrl,
      thumbnailUrl: photoThumbnailUrl
    }

    const res = await fetch(`${API_URL}/photos`, {
      method: 'POST',
      body: JSON.stringify(newPhoto),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  
    const createdPhoto = await res.json()
    console.log(createdPhoto)
  }

  return (
    <div>
      <form onSubmit={newPhotoHandler}>
        <div className="form-control">
          <label htmlFor="photo-title">Photo title:</label>
          <input type="text" name="photo-title" id="photo-title" value={photoTitle} onChange={photoTitleHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="photo-url">Photo URL:</label>
          <input type="text" name="photo-url" id="photo-url" value={photoUrl} onChange={photoUrlHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="photo-thumbnail-url">Photo Thumbnail URL:</label>
          <input type="text" name="photo-thumbnail-url" id="photo-thumbnail-url" value={photoThumbnailUrl} onChange={photoThumbnailUrlHandler} />
        </div>

        <button type="submit">Add a photo</button>
      </form>

      <button onClick={deleteAlbumHandler}>Delete Album</button>
      <h1>{album.id}. {album.title}</h1>
    </div>
  )
}

export default AlbumPage


