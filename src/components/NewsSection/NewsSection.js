import LargeLink from "../LargeLink/LargeLink"
import PrimaryNewsList from "../PrimaryNewsList/PrimaryNewsList"
import SecondaryNewsList from "../SecondaryNewsList/SecondaryNewsList"

import './NewsSection.css'

const NewsSection = () => {
  return (
    <div className="news-section">
      <h1 className="page-title">Naujienos</h1>

      <PrimaryNewsList />
      <SecondaryNewsList />

      <LargeLink text="Visos naujienos" url="#" />
    </div>
  )
}

export default NewsSection