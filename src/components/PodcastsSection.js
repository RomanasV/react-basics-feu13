import PodcastItem from "./PodcastItem"
import SectionTitle from "./SectionTitle"

const PodcastsSection = () => {
  return (
    <div className="podcasts-section">
      <SectionTitle title="Podcastai ir radijo laidos" />

      <div className="podcasts-list">
        <PodcastItem
          imageSrc="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png"
          imageAlt=""
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2021-09-02"
        />

        <PodcastItem
          imageSrc="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png"
          imageAlt=""
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2021-09-02"
        />

        <PodcastItem
          imageSrc="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png"
          imageAlt=""
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2021-09-02"
        />
        
        <PodcastItem
          imageSrc="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png"
          imageAlt=""
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2021-09-02"
        />

      </div>
    </div>
  )
}

export default PodcastsSection