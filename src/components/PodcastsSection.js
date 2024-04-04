import PodcastItem from "./PodcastItem"
import SectionTitle from "./SectionTitle"

const PodcastsSection = () => {
  return (
    <div className="podcasts-section">
      <SectionTitle />
      {/* <h2 className="section-title">Podcastai ir radijo laidos</h2> */}

      <div className="podcasts-list">
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
      </div>
    </div>
  )
}

export default PodcastsSection