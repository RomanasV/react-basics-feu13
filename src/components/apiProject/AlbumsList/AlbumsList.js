import AlbumItem from "../AlbumItem/AlbumItem"

const AlbumsList = ({ data }) => {

  const albumItems = data.map(album => <AlbumItem key={album.id} data={album} />)

  return (
    <div>
      {albumItems}
    </div>
  )
}

export default AlbumsList