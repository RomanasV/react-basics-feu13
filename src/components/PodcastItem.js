const PodcastItem = () => {
  return (
    <div className="podcast-item">
      <img src="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png" alt="" className="podcast-image" />
      <span className="podcast-length">Trukmė: 7:55</span>
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
        <span className="podcast-date">2021-09-02</span>
      </div>
    </div>
  )
}

export default PodcastItem