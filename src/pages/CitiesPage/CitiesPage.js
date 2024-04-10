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
      touristAttractions: ['Pirma viena', 'Antra vieta'],
      isCapital: false,
    },
  ]

  const [cities, setCities] = useState(INITIAL_CITIES)

  return (
    <div className="cities-list">
      {cities.map((city, index) => <CityItem key={index} data={city} />)}
    </div>
  )
}

export default CitiesPage