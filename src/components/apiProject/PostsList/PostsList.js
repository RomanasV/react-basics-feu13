import PostItem from "../PostItem/PostItem"

const PostsList = ({ data, title }) => {
  const postElements = data.map(post => <PostItem key={post.id} data={post} />)

  return (
    <div className="posts-wrapper">
      {title && <h2>{title}</h2>}
      
      {data.length > 0 ? (
        <ul>
          {postElements}
        </ul>
      ) : (
        <h2>No posts created...</h2>
      ) }
    </div>
  )
}

export default PostsList