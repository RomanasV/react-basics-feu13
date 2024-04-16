import { useState } from "react"
import { v4 as uuid } from 'uuid';
import CityItem from "../../components/CityItem/CityItem"

const CitiesPage = () => {
  const INITIAL_CITIES = [
    {
      id: uuid(),
      name: 'Vilnius',
      population: 500000,
      location: {
        continent: 'Europe',
        country: 'Lithuania',
      },
      touristAttractions: ['Pirma viena', 'Antra vieta'],
      isCapital: true,
    },
    {
      id: uuid(),
      name: 'Kaunas',
      population: 500000,
      location: {
        continent: 'Europe',
        country: 'Lithuania',
      },
      touristAttractions: ['Pirma viena'],
      isCapital: false,
    },
    {
      id: uuid(),
      name: 'Klaipėda',
      population: 500000,
      location: {
        continent: 'Europe',
        country: 'Lithuania',
      },
      touristAttractions: [],
      isCapital: false,
    },
  ]

  const [cities, setCities] = useState(INITIAL_CITIES)
  const [editCity, setEditCity] = useState(null)

  const [name, setName] = useState('')
  const [population, setPopulation] = useState(0)
  const [country, setCountry] = useState('')
  const [continent, setContinent] = useState('')
  const [touristAttractions, setTouristAttractions] = useState('')
  const [isCapital, setIsCapital] = useState(false)

  const nameHandler = event => setName(event.target.value)
  const populationHandler = event => setPopulation(Number(event.target.value))
  const countryHandler = event => setCountry(event.target.value)
  const continentHandler = event => setContinent(event.target.value)
  const touristAttractionsHandler = event => setTouristAttractions(event.target.value)
  const isCapitalHandler = event => setIsCapital(event.target.checked)

  const newCityHandler = event => {
    event.preventDefault()

    const touristAttractionsArr = touristAttractions.trim().length > 0 ? touristAttractions.split(',').map(attraction => attraction.trim()) : []

    const city = {
      name,
      population,
      location: {
        continent,
        country,
      },
      touristAttractions: touristAttractionsArr,
      isCapital,
    }

    if (editCity) {
      city.id = editCity.id

      setCities(prevState => {
        const updatedState = prevState.map(cityItem => cityItem.id === editCity.id ? city : cityItem)
        return updatedState
      })

      setEditCity(null)
    } else {
      city.id = uuid()

      setCities(prevState => [city, ...prevState])
    }

    setName('')
    setPopulation(0)
    setCountry('')
    setContinent('')
    setTouristAttractions('')
    setIsCapital(false)
  }

  const removeCityHandler = id => setCities(prevState => prevState.filter(city => city.id !== id))

  const editCityHandler = id => {
    const clickedCity = cities.find(city => city.id === id)
    setEditCity(clickedCity)

    setName(clickedCity.name)
    setPopulation(clickedCity.population)
    setCountry(clickedCity.location.country)
    setContinent(clickedCity.location.continent)

    const touristAttractionsString = clickedCity.touristAttractions.join(', ')
    setTouristAttractions(touristAttractionsString)
    setIsCapital(clickedCity.isCapital)
  }

  return (
    <div>
      <form onSubmit={newCityHandler}>
        <div className="form-control">
          <label htmlFor="name">City name:</label>
          <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="population">City population:</label>
          <input type="number" name="population" id="population" value={population} onChange={populationHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="country">City country:</label>
          <input type="text" name="country" id="country" value={country} onChange={countryHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="continent">City continent:</label>
          <input type="text" name="continent" id="continent" value={continent} onChange={continentHandler} />
        </div>

        <div className="form-control">
          <label htmlFor="tourist-attractions">City tourist attractions:</label>
          <textarea type="text" name="tourist-attractions" id="tourist-attractions" value={touristAttractions} onChange={touristAttractionsHandler}></textarea>
        </div>

        <div className="form-control">
          <input type="checkbox" name="is-capital" id="is-capital" checked={isCapital} onChange={isCapitalHandler} value="Is capital" />
          <label htmlFor="is-capital">Is capital</label>
        </div>

        <button type="submit">{editCity ? 'Edit City' : 'Add New City'}</button>
      </form>

      <div className="cities-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {cities.map((city, index) => (
          <CityItem 
            key={index} 
            data={city} 
            index={index} 
            listLength={cities.length}
            onDeleteCity={removeCityHandler}
            onEditCity={editCityHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default CitiesPage