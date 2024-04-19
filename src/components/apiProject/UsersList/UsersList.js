import { Link } from "react-router-dom"

const UsersList = ({ data }) => {
  const userElements = data.map(user => (
    <li key={user.id}>
      <Link to={`/api-project/users/${user.id}`}>{user.id}. {user.name} ({user.posts.length})</Link>
    </li>
  ))

  return (
    <ul>
      {userElements}
    </ul>
  )
}

export default UsersList