const CityItem = (props) => {
  console.log(props.data)

  const { name, population, isCapital, touristAttractions, location } = props.data
  const { continent, country } = location

  let cityDescription = `${name} city is located in ${continent}, ${country} and has population of ${population} people.`

  if (isCapital) {
    cityDescription += ` ${name} is the capital of ${country}.`
  }

  return (
    <div className="city-item">
      <h2 className="city-name">{name}</h2>
      <p className="city-description">{cityDescription}</p>

      <h3>Main tourist attractions of {name} are:</h3>
      <ul>
        {touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
      </ul>
    </div>
  )
}

export default CityItem