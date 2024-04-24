import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CommentsList from "../../../components/apiProject/CommentsList/CommentsList"
import { API_URL } from "../../../config"

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  
  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`${API_URL}/posts/${id}?_embed=user&_embed=comments`)
      const data = await res.json()

      setPost(data)
    }

    getPost()
  }, [id])

  if (!post) {
    return <p>Loading...</p>
  }

  const { title, body, user, comments } = post

  const author = user && <>Author: <Link to={`/api-project/users/${user.id}`}>{user.name}</Link></>

  return (
    <div>
      <div className="post-content">
        <Link to={`/api-project/edit-post/${id}`}>Edit Post</Link>
        <h1>{title}</h1>
        {author}
        <p>{body}</p>
      </div>

      <CommentsList data={comments} />
    </div>
  )
}

export default PostPage