import TouristAttractions from "../TouristAttractions/TouristAttractions"

const CityItem = (props) => {
  const { index, listLength, onDeleteCity, onEditCity } = props
  const { name, population, isCapital, touristAttractions, location, id } = props.data
  const { continent, country } = location

  // let cityWidth = '48%'
  
  // if (index === listLength - 1 && index % 2 === 0) {
  //   cityWidth = '100%'
  // }

  const cityWidth = (index === listLength - 1 && index % 2 === 0) ? '100%' : '48%'

  let cityDescription = `${name} city is located in ${continent}, ${country} and has population of ${population} people.`
  let cityName = name
  let cityClass = ''

  if (isCapital) {
    cityDescription += ` ${name} is the capital of ${country}.`
    cityName += ' (capital)'
    cityClass = 'capital'
  }

  const deleteHandler = () => onDeleteCity(id)
  const editHandler = () => onEditCity(id)

  return (
    <div className={`city-item ${cityClass}`} style={{ width: cityWidth }}>
      <h2 className="city-name">{cityName}</h2>
      <p className="city-description">{cityDescription}</p>

      <TouristAttractions list={touristAttractions} name={name} />

      <button onClick={deleteHandler}>Delete City</button>
      <button onClick={editHandler}>Edit City</button>
    </div>
  )
}

export default CityItem