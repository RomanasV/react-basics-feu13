import ServiceItem from '../ServiceItem/ServiceItem'
import './Content.css'

const Content = (props) => {
  const { services } = props

  // const servicesListElement = services.map((service, index) => <ServiceItem data={service} key={index} />)

  return (
    <main className="page-content">
      <div className="container">
        <div className="services-list">
          {/* {servicesListElement} */}

          {services.map((service, index) => <ServiceItem data={service} key={index} />)}

          {/* <div className="service-item">
            <div className="service-content-wrapper">
              <h2 className="service-title">Flowing Conversations</h2>
              <p className="service-description">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
            </div>

            <div className="service-image-wrapper">
              <img src="images/illustration-flowing-conversation.svg" alt="" className="service-image" />
            </div>
          </div> */}

          {/* <div className="service-item">
            <div className="service-content-wrapper">
              <h2 className="service-title">Grow Together</h2>
              <p className="service-description">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </p>
            </div>

            <div className="service-image-wrapper">
              <img src="images/illustration-grow-together.svg" alt="" className="service-image" />
            </div>
          </div>

          <div className="service-item">
            <div className="service-content-wrapper">
              <h2 className="service-title">Your Users</h2>
              <p className="service-description">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
            </div>

            <div className="service-image-wrapper">
              <img src="images/illustration-your-users.svg" alt="" className="service-image" />
            </div>
          </div> */}
        
        </div>
      </div>
    </main>
  )
}

export default Content