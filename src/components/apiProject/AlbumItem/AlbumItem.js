import { Link } from "react-router-dom"

const AlbumItem = ({ data }) => {
  const { title, photos, user, id } = data

  return (
    <div>
      <Link to={`/api-project/albums/${id}`}>
        <h2>{id}. {title} ({photos.length})</h2>
        <span>Album author: {user.name}</span>
        <img src={photos[0].thumbnailUrl} alt={photos[0].title} />
      </Link>
    </div>
  )
}

export default AlbumItem