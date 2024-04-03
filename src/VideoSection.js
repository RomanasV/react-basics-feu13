const VideoSection = () => {
  return (
    <div className="video-section">
      <h2 className="section-title">Vaizdo įrašai</h2>

      <div className="primary-video-wrapper">
        <div className="video-wrapper">
          <h3 className="video-title">#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <div className="secondary-video-wrapper">
        <div className="video-wrapper">
          <h3 className="video-title">Susipažink su mūsų įdarbinimo partneriais – Danske Bank!</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="video-wrapper">
          <h3 className="video-title">#3 Kaip atrodo Web Dizainerio (UX/UI) karjera?
          </h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <a href="#" className="large-button">Visi vaizdo įrašai</a>
    </div>
  )
}

export default VideoSection