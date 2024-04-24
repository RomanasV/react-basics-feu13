import { useEffect, useState } from "react"
import AlbumsList from "../../../components/apiProject/AlbumsList/AlbumsList"
import { API_URL } from "../../../config"

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const getAlbums = async () => {
      const res = await fetch(API_URL + '/albums?_embed=user&_embed=photos')
      const data = await res.json()

      setAlbums(data)
    }

    getAlbums()
  }, [])
  return (
    <div>
      <AlbumsList data={albums} title="Albums list:" />
    </div>
  )
}

export default AlbumsPage