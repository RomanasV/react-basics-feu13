import { useState } from "react"
import { API_URL } from "../../../config"
import { useNavigate } from "react-router-dom"
import UserForm from "../../../components/apiProject/UserForm/UserForm"

const CreateUserPage = () => {
  const navigate = useNavigate()

  const newUserHandler = async (newUser) => {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  
    const createdUser = await res.json()
    navigate(`/api-project/users/${createdUser.id}`)
  }

  return (
    <div>
      <h1>Create new user</h1>

      <UserForm onUserSubmit={newUserHandler} />
    </div>
  )
}

export default CreateUserPage

