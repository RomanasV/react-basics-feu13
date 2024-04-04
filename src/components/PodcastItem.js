// const PodcastItem = (props) => {
const PodcastItem = ({ imageSrc, imageAlt, length, title, date }) => {
  // const imageSrc = props.imageSrc
  // const imageAlt = props.imageAlt
  // const length = props.length
  // const title = props.title
  // const date = props.date

  // const { imageSrc, imageAlt, length, title, date } = props

  return (
    <div className="podcast-item">
      <img src={imageSrc} alt={imageAlt} className="podcast-image" />
      <span className="podcast-length">Trukmė: {length}</span>
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">{title}</h3>
        <span className="podcast-date">{date}</span>
      </div>
    </div>
  )
}

export default PodcastItem