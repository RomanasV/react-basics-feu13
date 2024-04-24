import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CommentsList from "../../../components/apiProject/CommentsList/CommentsList"
import { API_URL } from "../../../config"

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [postDeleted, setPostDeleted] = useState(false)
  
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

  const deleteHandler = () => {
    fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' })
    setPostDeleted(true)
  }

  return (
    <div>
      {postDeleted ? (
        <>
          <h2>Post was deleted...</h2>
          <Link to="/api-project/posts">Back to other posts</Link>
        </>
      ) : (
        <>
          <div className="post-content">
            <Link to={`/api-project/edit-post/${id}`}>Edit Post</Link>
            <button onClick={deleteHandler}>Delete Post</button>
            <h1>{title}</h1>
            {author}
            <p>{body}</p>
          </div>

          <CommentsList data={comments} />
        </>
      )}
    </div>
  )
}

export default PostPage