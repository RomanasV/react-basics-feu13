import HuddlePage from './pages/HuddlePage/HuddlePage'
import Testimonials from './pages/TestimonialsPage/Testimonials'
import NewsPage from './pages/NewsPage/NewsPage'
import { Link, Route, Routes } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import CounterPage from './pages/CounterPage/CounterPage'
import CitiesPage from './pages/CitiesPage/CitiesPage'
import CarsPage from './pages/CarsPage/CarsPage'

const App = () => {
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
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/cars' element={<CarsPage />} />

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