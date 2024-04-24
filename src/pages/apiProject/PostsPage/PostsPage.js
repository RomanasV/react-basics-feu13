import { useState } from "react"
import { useEffect } from "react"
import PostsList from "../../../components/apiProject/PostsList/PostsList"
import { API_URL } from "../../../config"

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(API_URL + '/posts?_embed=user&_embed=comments')
      const data = await res.json()

      setPosts(data.reverse())
    }

    getPosts()
  }, [])

  return (
    <div>
      <PostsList data={posts} title='Posts List:' />  
    </div>
  )
}

export default PostsPage