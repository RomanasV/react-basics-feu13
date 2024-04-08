import './Footer.css'

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="cta-section">
          <h2 className="cta-title">Ready To Build Your Community?</h2>
          <a href="#" className="button primary-button">Get Started For Free</a>
        </div>
      </div>

      <div className="footer-section">
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="footer-logo-wrapper">
              <img src="images/logo-white.svg" alt="" className="footer-logo" />
            </div>

            <div className="footer-content">
              <div className="footer-contacts-wrapper">
                <ul className="footer-list footer-contacts-list">
                  <li className="footer-list-item">
                    <img src="images/icon-location.svg" alt="" className="footer-list-icon" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                  <li className="footer-list-item">
                    <img src="images/icon-phone.svg" alt="" className="footer-list-icon" />
                    <a href="tel:+1-543-123-4567" className="footer-link">+1-543-123-4567</a>
                  </li>
                  <li className="footer-list-item">
                    <img src="images/icon-email.svg" alt="" className="footer-list-icon" />
                    <a href="mailto:example@huddle.com" className="footer-link">example@huddle.com</a>
                  </li>
                </ul>
              </div>

              <div className="footer-menu-wrapper">
                <ul className="footer-list footer-menu-list">
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">About Us</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">What We Do</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">FAQ</a>
                  </li>
                </ul>
                
                <ul className="footer-list footer-menu-list">
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">Career</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">Blog</a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="footer-socials-wrapper">
                <ul className="footer-list footer-socials-list">
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      <img src="images/facebook_icon.svg" alt="" className="footer-social-image" />
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      <img src="images/twitter_bird_icon.svg" alt="" className="footer-social-image" />
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      <img src="images/instagram_icon.svg" alt="" className="footer-social-image" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="footer-copyright">
              &copy; Copyright 2018 Huddle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer