import { API_URL } from "../../config"
import { useNavigate } from "react-router-dom"
import PostForm from "../../components/apiProject/PostForm/PostForm"
import { toast } from "react-toastify"

const CreatePost = () => {
  const navigate = useNavigate()

  const newPostHandler = async (newPost) => {
    const res = await fetch(API_URL + '/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const createdPost = await res.json()

    toast.success('Post was created!')

    navigate('/api-project/posts/' + createdPost.id)
  }

  return (
    <div>
      <PostForm onPostSubmit={newPostHandler} />
    </div>
  )
}

export default CreatePost