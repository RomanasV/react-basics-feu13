import { useState } from "react"

const AIPage = () => {
  const [name, setName] = useState('')
  const [output, setOutput] = useState('')

  const nameHandler = event => setName(event.target.value)

  const nameFormHandler = async event => {
    event.preventDefault()

    const age = await getAge(name)
    const gender = await getGender(name)
    const nationality = await getNationality(name)

    setOutput(`${name} is a ${age} years old ${gender} from ${nationality}.`)
    setName('')
  }

  const getAge = async name => {
    const res = await fetch(`https://api.agify.io?name=${name}`)
    const data = await res.json()
    const age = data.age
    return age
  }

  const getGender = async name => {
    const res = await fetch(`https://api.genderize.io?name=${name}`)
    const data = await res.json()
    const gender = data.gender
    return gender
  }

  const getNationality = async name => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    const data = await res.json()
    const nationality = data.country[0].country_id
    return nationality
  }

  return (
    <div>
      <form onSubmit={nameFormHandler}>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {output && <p>{output}</p>}
    </div>
  )
}

export default AIPage