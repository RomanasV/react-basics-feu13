import { useState } from "react"

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
    }
  ]

  const [cities, setCities] = useState(INITIAL_CITIES)

  return (
    <div>CitiesPage</div>
  )
}

export default CitiesPage