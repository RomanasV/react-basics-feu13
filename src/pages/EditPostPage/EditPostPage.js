import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import PostForm from "../../components/apiProject/PostForm/PostForm"

const EditPostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`${API_URL}/posts/${id}`)
      const data = await res.json()

      setPost(data)
    }

    getPost()
  }, [id])

  const editPostHandler = async (postData) => {
    const res = await fetch(`${API_URL}/posts/${id}` , {
      method: 'PUT',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const updatedPost = await res.json()
    navigate('/api-project/posts/' + updatedPost.id)
  }

  return (
    <div>
      {post && <PostForm editPostData={post} onPostSubmit={editPostHandler} />}
    </div>
  )
}

export default EditPostPage