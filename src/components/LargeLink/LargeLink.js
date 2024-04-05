import './LargeLink.css'

function LargeLink(props) {
  return (
    <a href={props.url} className="large-button">{props.text}</a>
  )
}

export default LargeLink