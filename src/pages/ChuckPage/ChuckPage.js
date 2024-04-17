import { useEffect } from "react"
import { useState } from "react"

const ChuckPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [joke, setJoke] = useState('')

  // useEffect(() => {
    // fetch('https://api.chucknorris.io/jokes/random')
    //   .then(res => res.json())
    //   .then(joke => {
    //     setJoke(joke.value)
    //   })
  // }, [])

  // useEffect(() => {
  //   async function fetchJokes() {
  //     const res = await fetch('https://api.chucknorris.io/jokes/random')
  //     const joke = await res.json()

  //     setJoke(joke.value)
  //   }

  //   fetchJokes()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const jokeRes = await fetch('https://api.chucknorris.io/jokes/random')
      const joke = await jokeRes.json()

      setJoke(joke.value)

      const categoriesRes = await fetch('https://api.chucknorris.io/jokes/categories')
      const categories = await categoriesRes.json()

      setCategories(categories)
      setSelectedCategory(categories[0])
    }

    fetchData()
  }, [])

  const randomJokeHandler = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(joke => {
        setJoke(joke.value)
      })
  }

  const categorySelectHandler = event => setSelectedCategory(event.target.value)

  const categoryJokeHandler = async event => {
    event.preventDefault()

    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
    const joke = await res.json()

    setJoke(joke.value)
  }

  return (
    <div>
      <button onClick={randomJokeHandler}>Get A New Joke</button>
      {joke && <p>{joke}</p>}

      <form onSubmit={categoryJokeHandler}>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={selectedCategory} onChange={categorySelectHandler}>

          {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
        </select>

        <button type="submit">Joke by category</button>
      </form>
    </div>
  )
}

export default ChuckPage