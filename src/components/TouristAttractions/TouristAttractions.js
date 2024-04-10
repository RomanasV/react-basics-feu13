const TouristAttractions = (props) => {
  const { list, name } = props

  if (list.length === 0) {
    return ''
  }

  const title = (list.length === 1) ? `Main tourist attraction of ${name} is:` : `Main tourist attractions of ${name} are:`
  const attractionsList = list.map((attraction, index) => <li key={index}>{attraction}</li>)

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {attractionsList}
      </ul>
    </>
  )
}

export default TouristAttractions