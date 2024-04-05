import './PodcastItem.css'

const PodcastItem = (props) => {
  const { imageSrc, imageAlt, length, title, date } = props.data

  if (!title) {
    return ''
  }

  const image = imageSrc && <img src={imageSrc} alt={imageAlt} className="podcast-image" />

  const lengthElement = length && <span className="podcast-length">Trukmė: {length}</span>

  const dateElement = date && <span className="podcast-date">{date}</span>

  return (
    <div className="podcast-item">
      {image}
      {lengthElement}
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">{title}</h3>
        {dateElement}
      </div>
    </div>
  )
}

export default PodcastItem