import EventsSection from "../../components/EventsSection"
import NewsSection from "../../components/NewsSection"
import PodcastsSection from "../../components/PodcastsSection"
import VideoSection from "../../components/VideoSection"

import './NewsPage.css'

const NewsPage = () => {
  return (
    <div className="container">
      <div className="page-content">
        <main className="main-content">
          <NewsSection />
          <VideoSection />
        </main>

        <aside className="sidebar-content">
          <PodcastsSection />
          <EventsSection />
        </aside>
      </div>
    </div>
  )
}

export default NewsPage