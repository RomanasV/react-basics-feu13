import { useNavigate, useParams } from "react-router-dom"
import UserForm from "../../../components/apiProject/UserForm/UserForm"
import { useEffect, useState } from "react"
import { API_URL } from "../../../config"

const EditUserPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${API_URL}/users/${id}`)
      const data = await res.json()

      setUser(data)
    }

    getUser()
  }, [id])

  const updateUserHandler = async (userData) => {
    const res = await fetch(`${API_URL}/users/${userData.id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  
    const updatedUser = await res.json()
    navigate('/api-project/users/' + updatedUser.id)
  }
  

  return (
    <div>
      <h1>Edit user</h1>

      {user ? <UserForm onUserSubmit={updateUserHandler} editUserData={user} /> : <p>Loading...</p>}
      
    </div>
  )
}

export default EditUserPage