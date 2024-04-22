import AlbumItem from "../AlbumItem/AlbumItem"

const AlbumsList = ({ data, title }) => {

  const albumItems = data.map(album => <AlbumItem key={album.id} data={album} />)

  return (
    <div className="albums-wrapper">
      {title && <h2>{title}</h2>}

      {albumItems}
    </div>
  )
}

export default AlbumsList