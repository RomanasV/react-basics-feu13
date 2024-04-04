import EventItem from "./EventItem"
import LargeLink from "./LargeLink"
import SectionTitle from "./SectionTitle"

const EventsSection = () => {
  return (
    <div className="events-section">
      <SectionTitle />
      {/* <h2 className="section-title">Renginiai</h2> */}

      <div className="events-list">
        <EventItem />
        <EventItem />
        <EventItem />
      </div>

      <LargeLink />
    </div>
  )
}

export default EventsSection