import LargeButton from '../LargeButton/LargeButton'
import './HeroBox.css'

const HeroBox = (props) => {
  const { content, header } = props.data

  return (
    <div className="hero-box">
      <div className="container">

        <div className="hero-box-content-wrapper">
          <header className="page-header">
            <div className="logo-wrapper">
              {/* <img className="logo" src="images/logo.svg" alt="" /> */}
              <img className="logo" src={header.image} alt="" />
            </div>

            <LargeButton title={header.buttonText} color={header.buttonColor} />
          </header>

          <div className="hero-box-wrapper">
            <div className="hero-box-content">
              <h1 className="page-title">{content.pageTitle}</h1>

              <p className="page-description">{content.pageDescription}</p>

              <LargeButton title={content.buttonText} />
            </div>
            <div className="hero-box-image">
              <img className="hero-box-image" src={content.image} alt="" />
              {/* <img className="hero-box-image" src="images/illustration-mockups.svg" alt="" /> */}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroBox