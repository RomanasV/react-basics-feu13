import CommentItem from "../CommentItem/CommentItem"

const CommentsList = ({ data, onCommentDelete }) => {
  if (!data) {
    return ''
  }

  if (data.length === 0) {
    return <h2>No comments yet :(</h2>
  }

  return (
    <div className="comments-list">
      <h2>Comments:</h2>
      
      {data.map(comment => <CommentItem onCommentDelete={onCommentDelete} key={comment.id} data={comment} />)}
    </div>
  )
}

export default CommentsList