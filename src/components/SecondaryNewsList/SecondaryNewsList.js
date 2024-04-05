import NewsItem from "../NewsItem/NewsItem"
import './SecondaryNewsList.css'

const SecondaryNewsList = () => {
  return (
    <div className="secondary-news-list">
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}

export default SecondaryNewsList