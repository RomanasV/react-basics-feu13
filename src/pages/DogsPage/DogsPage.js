import { useEffect, useState } from "react"

const DogsPage = () => {
  const [breeds, setBreeds] = useState()
  const [selectedBreed, setSelectedBreed] = useState('empty')
  const [picture, setPicture] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await res.json()

      const breedsObj = data.message
      setBreeds(breedsObj)
    }

    fetchCategories()
  }, [])

  const getOptionElements = () => {
    const options = []
    
    let index = 0

    for (const mainBreed in breeds) {
      const subBreeds = breeds[mainBreed]

      if (subBreeds.length === 0) {
        options.push(<option key={index} value={mainBreed}>{mainBreed}</option>)
        index++
      } else {
        subBreeds.forEach(subBreed => {
          options.push(<option key={index} value={`${mainBreed}/${subBreed}`}>{`${mainBreed} (${subBreed})`}</option>)
          index++
        })
      }

    }

    return options
  }

  const breedSelectHandler = event => setSelectedBreed(event.target.value)

  const pictureHandler = async event => {
    event.preventDefault()

    if (selectedBreed === 'empty') {
      return
    }

    const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    const picture = await res.json()

    setPicture(picture.message)
  }

  return (
    <div>
      <form onSubmit={pictureHandler}>
        <div className="form-control">
          <label htmlFor="breed">Breed</label>
          <select id="breed" name="breed" value={selectedBreed} onChange={breedSelectHandler}>
            <option disabled value="empty">---Pick a breed---</option>
            {getOptionElements()}
          </select>
        </div>

        <button disabled={selectedBreed === 'empty'}>Get Picture</button>
      </form>

      {picture && <img src={picture} alt={selectedBreed} />}
    </div>
  )
}

export default DogsPage