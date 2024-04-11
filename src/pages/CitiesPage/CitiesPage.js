import { useState } from "react"
import CityItem from "../../components/CityItem/CityItem"
import { Link } from "react-router-dom"

const CitiesPage = ({cities}) => {
  return (
    <div>
      <Link to='/cities/add-new'>New City</Link>

      <div className="cities-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {cities.map((city, index) => (
          <CityItem 
            key={index} 
            data={city} 
            index={index} 
            listLength={cities.length} 
          />
        ))}
      </div>
    </div>
  )
}

export default CitiesPage