import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CommentsList from "../../../components/apiProject/CommentsList/CommentsList"

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  
  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?_expand=user&_embed=comments`)
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
        <h1>{title}</h1>
        {author}
        <p>{body}</p>
      </div>

      <CommentsList data={comments} />
    </div>
  )
}

export default PostPage