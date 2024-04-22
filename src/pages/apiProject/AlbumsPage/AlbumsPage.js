import { useEffect, useState } from "react"
import AlbumsList from "../../../components/apiProject/AlbumsList/AlbumsList"

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const getAlbums = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos')
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