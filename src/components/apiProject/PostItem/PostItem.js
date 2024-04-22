import { Link } from "react-router-dom"

const PostItem = ({ data }) => {
  const commentsCount = data.comments && `(${data.comments.length})`
  const authorLink = data.user && <>- <Link to={`/api-project/users/${data.user.id}`}>{data.user.name}</Link></>

  return (
    <li>
      <Link to={`/api-project/posts/${data.id}`}>{data.title} {commentsCount}</Link>
      {authorLink}
    </li>
  )
}

export default PostItem