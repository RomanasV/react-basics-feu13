import { useState } from "react"
import { useEffect } from "react"
import PostsList from "../../../components/apiProject/PostsList/PostsList"

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments')
      const data = await res.json()

      setPosts(data)
    }

    getPosts()
  }, [])

  return (
    <div>
      <h1>Posts List</h1>

      <PostsList data={posts} />  
    </div>
  )
}

export default PostsPage