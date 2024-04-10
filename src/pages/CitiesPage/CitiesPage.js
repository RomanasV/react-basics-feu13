import { useState } from "react"
import CityItem from "../../components/CityItem/CityItem"

const CitiesPage = () => {
  const INITIAL_CITIES = [
    {
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

  const [name, setName] = useState('')

  const nameHandler = event => setName(event.target.value)

  const newCityHandler = event => {
    event.preventDefault()

    const newCity = {
      name: name,
      population: 500000,
      location: {
        continent: 'Europe',
        country: 'Lithuania',
      },
      touristAttractions: ['Pirma viena', 'Antra vieta'],
      isCapital: true,
    }

    console.log(newCity)
  }

  return (
    <div>

      <form onSubmit={newCityHandler}>
        <div className="form-control">
          <label htmlFor="name">City name:</label>
          <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
        </div>

        <button type="submit">Add New City</button>
      </form>

      <div className="cities-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {cities.map((city, index) => <CityItem key={index} data={city} index={index} listLength={cities.length} />)}
      </div>
    </div>
  )
}

export default CitiesPage