const EventItem = () => {
  return (
    <div className="event-item">

      <a href="./">
        <div className="event-image-wrapper">
          <img src="https://codeacademy.lt/wp-content/uploads/2024/02/CCBaltics-vizualas-1024x592-1.png" alt="" className="event-image" />
        </div>

        <div className="event-content-wrapper">
          <div className="event-date">
            <div className="event-day">24</div>
            <div className="event-month">Geg</div>
          </div>

          <div className="event-content">
            <span className="event location">Lietuvos parodų ir kongresų centras LITEXPO</span>
            <h3 className="event-title">COMIC CON BALTICS 2024</h3>
          </div>
        </div>
      </a>

    </div>
  )
}

export default EventItem