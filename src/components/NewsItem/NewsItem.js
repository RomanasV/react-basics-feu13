import './NewsItem.css'

const NewsItem = ({ url, imageSrc, imageAlt, category, title, date }) => {
  if (!title || !url) {
    return ''
  }

  // let imageElement = ''
  
  // if (imageSrc) {
  //   imageElement = (
  //     <div className="news-image-wrapper">
  //       <img src={imageSrc} alt={imageAlt} className="news-image" />
  //     </div>
  //   )
  // }

  // const imageElement = imageSrc ? (
  //   <div className="news-image-wrapper">
  //     <img src={imageSrc} alt={imageAlt} className="news-image" />
  //   </div>
  // ) : ''

  // const imageElement = imageSrc && (
  //   <div className="news-image-wrapper">
  //     <img src={imageSrc} alt={imageAlt} className="news-image" />
  //   </div>
  // )

  const categoryElement = category && <span className="news-category">{category}</span>

  // const dateElement = date && <span className="news-date">{date}</span>

  return (
    <div className="news-item">
      <a href={url}>
        {/* {imageElement} */}

        {imageSrc && (
          <div className="news-image-wrapper">
            <img src={imageSrc} alt={imageAlt} className="news-image" />
          </div>
        )}

        <div className="news-content-wrapper">
          {categoryElement}

          <h2 className="news-title">{title}</h2>
          {/* {dateElement} */}

          {date && <span className="news-date">{date}</span>}
        </div>
      </a>

    </div>
  )
}

export default NewsItem