const CommentsList = ({ data }) => {
  if (!data) {
    return ''
  }

  if (data.length === 0) {
    return <h2>No comments yet :(</h2>
  }

  return (
    <div className="comments-list">
      <h2>Comments:</h2>
      
      {data.map(comment => (
        <div className="comment-item" key={comment.id}>
          <h3>{comment.name}</h3>
          <span>Author email: {comment.email}</span>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentsList