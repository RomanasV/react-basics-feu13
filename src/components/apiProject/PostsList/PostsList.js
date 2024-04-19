import { Link } from "react-router-dom"

const PostsList = ({ data }) => {
  const postElements = data.map(post => (
    <li key={post.id}>
      <Link to={`/api-project/posts/${post.id}`}>{post.title} ({post.comments.length})</Link> - <Link to={`/api-project/users/${post.user.id}`}>{post.user.name}</Link>
    </li>
  ))

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {postElements}
        </ul>
      ) : (
        <h2>No posts created...</h2>
      ) }
    </div>
  )
}

export default PostsList