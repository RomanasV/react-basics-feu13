import { useState } from "react"
import { useEffect } from "react"
import UsersList from "../../../components/apiProject/UsersList/UsersList"
import { API_URL } from "../../../config"

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(API_URL + '/users/?_embed=posts')
      const data = await res.json()

      setUsers(data)
    }

    getUsers()
  }, [])

  return (
    <div>
      <h1>Users List</h1>

      <UsersList data={users} />
    </div>
  )
}

export default UsersPage