import './EventItem.css'

const EventItem = (props) => {
  return (
    <div className="event-item">

      <a href={props.url}>
        <div className="event-image-wrapper">
          <img src={props.imageSrc} alt={props.imageAlt} className="event-image" />
        </div>

        <div className="event-content-wrapper">
          <div className="event-date">
            <div className="event-day">{props.day}</div>
            <div className="event-month">{props.month}</div>
          </div>

          <div className="event-content">
            <span className="event-location">{props.location}</span>
            <h3 className="event-title">{props.title}</h3>
          </div>
        </div>
      </a>

    </div>
  )
}

export default EventItem