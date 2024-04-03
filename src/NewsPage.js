import NewsSection from "./NewsSection"
import VideoSection from "./VideoSection"

const NewsPage = () => {
  return (
    <div className="container">
      <div className="page-content">
        <main className="main-content">
          <NewsSection />
          <VideoSection />
        </main>

        <aside className="sidebar-content">
          <div className="podcasts-section">
            <h2 className="section-title">Podcastai ir radijo laidos</h2>

            <div className="podcasts-list">
              <div className="podcast-item">
                <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image">
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>

              <div className="podcast-item">
                <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image">
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>

              <div className="podcast-item">
                <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image">
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>

              <div className="podcast-item">
                <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image">
                <span className="podcast-length">Trukmė: 7:55</span>
                <button className="podcast-play">Play</button>

                <div className="podcast-content">
                  <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                  <span className="podcast-date">2021-09-02</span>
                </div>
              </div>
            </div>
          </div>

          <div className="events-section">
            <h2 className="section-title">Renginiai</h2>

            <div className="events-list">
              <div className="event-item">

                <a href="#">
                  <div className="event-image-wrapper">
                    <img src="https://codeacademy.lt/wp-content/uploads/2024/02/CCBaltics-vizualas-1024x592-1.png" alt="" className="event-image">
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

              <div className="event-item">

                <a href="#">
                  <div className="event-content-wrapper">
                    <div className="event-date">
                      <div className="event-day">2</div>
                      <div className="event-month">Bal</div>
                    </div>

                    <div className="event-content">
                      <h3 className="event-title">PyCon Lithuania 2024</h3>
                    </div>
                  </div>
                </a>

              </div>

              <div className="event-item">

                <a href="#">
                  <div className="event-content-wrapper">
                    <div className="event-date">
                      <div className="event-day">24</div>
                      <div className="event-month">Geg</div>
                    </div>

                    <div className="event-content">
                      <span className="event location">Kaunas</span>
                      <h3 className="event-title">LT Game Jam 2024</h3>
                    </div>
                  </div>
                </a>

              </div>
            </div>

            <a href="#" className="large-button">Daugiau</a>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default NewsPage