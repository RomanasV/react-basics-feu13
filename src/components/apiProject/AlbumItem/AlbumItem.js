import { Link } from "react-router-dom"

const AlbumItem = ({ data }) => {
  const { title, photos, user, id } = data

  const photosCount = photos && `(${photos.length})`
  const image = photos && photos.length > 0 && <img src={photos[0].thumbnailUrl} alt={photos[0].title} />

  const author = user && <span>Album author: {user.name}</span>

  return (
    <div className="album-item">
      <Link to={`/api-project/albums/${id}`}>
        <h2>{id}. {title} {photosCount}</h2>
        {author}
        {image}
      </Link>
    </div>
  )
}

export default AlbumItem