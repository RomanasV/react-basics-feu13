import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const UserPage = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await res.json()

      setUser(data)
    }

    getUser()
  }, [])

  if (!user) {
    return <p>Loading...</p>
  }

  const { name, address, email, phone, website } = user

  return (
    <div>
      <h1>{id}. {name}</h1>
    </div>
  )
}

export default UserPage