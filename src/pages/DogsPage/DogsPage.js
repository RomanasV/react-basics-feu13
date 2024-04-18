import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

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
    if (!breeds) {
      return
    }
    
    const options = []
    
    const breedsData = Object.entries(breeds)

    breedsData.forEach(breed => {
      const mainBreed = breed[0]
      const subBreeds = breed[1]

      if (subBreeds.length === 0) {
        const mainBreedOption = <option key={uuid()} value={mainBreed}>{mainBreed}</option>
        options.push(mainBreedOption)

        return
      }

      subBreeds.forEach(subBreed => {
        const subBreedOption = <option key={uuid()} value={`${mainBreed}/${subBreed}`}>{`${mainBreed} (${subBreed})`}</option>
        options.push(subBreedOption)
      })

    })
      
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