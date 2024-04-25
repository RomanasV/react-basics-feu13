import { API_URL } from "../../../config";

const CommentItem = ({ data, onCommentDelete }) => {
  const { id, body, name, email } = data

  const deleteCommentHandler = () => {
    fetch(`${API_URL}/comments/${id}`, {
      method: 'DELETE',
    })

    onCommentDelete(id)
  }

  return (
    <div className="comment-item">
      <h3>{name}</h3>
      <span>Author email: {email}</span>
      <p>{body}</p>
      <button onClick={deleteCommentHandler}>Delete Comment</button>
    </div>
  )
}

export default CommentItem