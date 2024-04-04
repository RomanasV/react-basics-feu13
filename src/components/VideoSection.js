import LargeLink from "./LargeLink"
import SectionTitle from "./SectionTitle"
import VideoWrapper from "./VideoWrapper"

const VideoSection = () => {
  return (
    <div className="video-section">
      <SectionTitle />

      <div className="primary-video-wrapper">
        <VideoWrapper />
      </div>

      <div className="secondary-video-wrapper">
        <VideoWrapper />
        <VideoWrapper />
        
        {/* <div className="video-wrapper">
          <h3 className="video-title">Susipažink su mūsų įdarbinimo partneriais – Danske Bank!</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="video-wrapper">
          <h3 className="video-title">#3 Kaip atrodo Web Dizainerio (UX/UI) karjera?
          </h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yovsPjuDElw?si=W3TFXeDi_OAjbQ6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
      </div>

      <LargeLink />
      {/* <a href="#" className="large-button">Visi vaizdo įrašai</a> */}
    </div>
  )
}

export default VideoSection