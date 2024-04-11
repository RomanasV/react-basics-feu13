import HuddlePage from './pages/HuddlePage/HuddlePage'
import Testimonials from './pages/TestimonialsPage/Testimonials'
import NewsPage from './pages/NewsPage/NewsPage'
import { Link, Route, Routes } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import CounterPage from './pages/CounterPage/CounterPage'
import CitiesPage from './pages/CitiesPage/CitiesPage'
import { useState } from 'react'
import CitiesForm from './components/CitiesForm/CitiesForm'

const App = () => {
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
  const newCityHandler = newCity => setCities(prevState => [newCity, ...prevState])

  return (
    <>
      <PageHeader />

      <Routes>
        <Route path='/' element={<h1>Hello World</h1>} />
        <Route path='/huddle' element={<HuddlePage />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/codeacademy' element={<h1>Code Academy page</h1>} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/counter' element={<CounterPage />} />
        
        <Route path='/cities' element={<CitiesPage cities={cities} />}  />
        <Route path='/cities/add-new' element={<CitiesForm onNewCity={newCityHandler} />} />

        <Route path='*' element={
          <div>
            <h1>404: Page not found</h1>
            <Link to="/">Go back to home page</Link>
          </div>
        } />
      </Routes>
    </>
  )
}

export default App