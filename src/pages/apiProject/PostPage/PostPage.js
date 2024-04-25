import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CommentsList from "../../../components/apiProject/CommentsList/CommentsList"
import { API_URL } from "../../../config"

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)
  const [postDeleted, setPostDeleted] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  
  const nameHandler = event => setName(event.target.value)
  const emailHandler = event => setEmail(event.target.value)
  const contentHandler = event => setContent(event.target.value)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/posts/${id}?_embed=user`)
      const data = await res.json()

      setPost(data)

      const commentsRes = await fetch(`${API_URL}/comments?postId=${id}`)
      const commentsData = await commentsRes.json()

      setComments(commentsData.reverse())
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

  const newCommentHandler = async event => {
    event.preventDefault()

    const newComment = {
      postId: id,
      name,
      email,
      body: content
    }

    const res = await fetch(`${API_URL}/comments`, {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  
    const createdComment = await res.json()

    setComments(prevState => [createdComment, ...prevState])

    setName('')
    setEmail('')
    setContent('')
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

          <form onSubmit={newCommentHandler}>
            <div className="form-control">
              <label htmlFor="name">Post name:</label>
              <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
            </div>

            <div className="form-control">
              <label htmlFor="content">Message:</label>
              <textarea name="content" id="content" value={content} onChange={contentHandler}></textarea>
            </div>

            <button>Add A Comment</button>
          </form>

          {comments ? <CommentsList onCommentDelete={deleteCommentHandler} data={comments} /> : <p>Loading comments...</p>}
        </>
      )}
    </div>
  )
}

export default PostPage