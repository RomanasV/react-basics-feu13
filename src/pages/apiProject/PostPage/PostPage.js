import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CommentsList from "../../../components/apiProject/CommentsList/CommentsList"
import { API_URL } from "../../../config"

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)
  const [postDeleted, setPostDeleted] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/posts/${id}?_embed=user`)
      const data = await res.json()

      setPost(data)

      const commentsRes = await fetch(`${API_URL}/comments?postId=${id}`)
      const commentsData = await commentsRes.json()

      setComments(commentsData)
    }

    getData()
  }, [id])

  if (!post) {
    return <p>Loading...</p>
  }

  const { title, body, user } = post

  const author = user && <>Author: <Link to={`/api-project/users/${user.id}`}>{user.name}</Link></>

  const deleteHandler = () => {
    fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' })
    setPostDeleted(true)
  }

  const deleteCommentHandler = (id) => {
    setComments(prevState => prevState.filter(comment => comment.id !== id))
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

          {comments ? <CommentsList onCommentDelete={deleteCommentHandler} data={comments} /> : <p>Loading comments...</p>}
        </>
      )}
    </div>
  )
}

export default PostPage