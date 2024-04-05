import EventsSection from "../../components/EventsSection"
import NewsSection from "../../components/NewsSection"
import PodcastsSection from "../../components/PodcastsSection"
import VideoSection from "../../components/VideoSection"

import './NewsPage.css'

const NewsPage = () => {
  const podcastsData = {
    title: 'Podcastai ir radijo laidos',
    list: [
      {
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        imageAlt: "",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
      },
      {
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        imageAlt: "",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
      },
      {
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        imageAlt: "",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
      },
      {
        imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
        imageAlt: "",
        length: "7:55",
        title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
      }
    ]
  }

  return (
    <div className="container">
      <div className="page-content">
        <main className="main-content">
          <NewsSection />
          <VideoSection />
        </main>

        <aside className="sidebar-content">
          <PodcastsSection data={podcastsData} />
          <EventsSection />
        </aside>
      </div>
    </div>
  )
}

export default NewsPage