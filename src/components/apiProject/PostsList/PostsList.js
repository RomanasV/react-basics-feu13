import { Link } from "react-router-dom"

const PostsList = ({ data }) => {
  console.log(data)

  const postElements = data.map(post => (
    <li key={post.id}>
      <Link to='/api-project/post'>{post.title} ({post.comments.length})</Link> - <Link to='/api-project/user'>{post.user.name}</Link>
    </li>
  ))

  return (
    <div>
      <ul>
        {postElements}
      </ul>
    </div>
  )
}

export default PostsList