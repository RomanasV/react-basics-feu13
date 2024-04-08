import './ServiceItem.css'

const ServiceItem = (props) => {
  const { title, description, image } = props.data

  if (!title) {
    return ''
  }

  const imageWrapper = image && (
    <div className="service-image-wrapper">
      <img src={image} alt="" className="service-image" />
    </div>
  )

  return (
    <div className="service-item">
      <div className="service-content-wrapper">
        <h2 className="service-title">{title}</h2>
        {description && <p className="service-description">{description}</p>}
      </div>

      {imageWrapper}
    </div>
  )
}

export default ServiceItem