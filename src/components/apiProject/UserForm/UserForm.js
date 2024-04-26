import { useEffect, useState } from "react"

const UserForm = ({ editUserData, onUserSubmit }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [suite, setSuite] = useState('')
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyCatchPhrase, setCompanyCatchPhrase] = useState('')
  const [companyBs, setCompanyBs] = useState('')

  useEffect(() => {
    if (editUserData) {
      setName(editUserData.name)
      setUsername(editUserData.username)
      setEmail(editUserData.email)
      setStreet(editUserData.address.street)
      setSuite(editUserData.address.suite)
      setCity(editUserData.address.city)
      setZipcode(editUserData.address.zipcode)
      setLat(editUserData.address.geo.lat)
      setLng(editUserData.address.geo.lng)
      setPhone(editUserData.phone)
      setWebsite(editUserData.website)
      setCompanyName(editUserData.company.name)
      setCompanyCatchPhrase(editUserData.company.catchPhrase)
      setCompanyBs(editUserData.company.bs)
    }
  }, [editUserData])


  const nameHandler = event => setName(event.target.value)
  const usernameHandler = event => setUsername(event.target.value)
  const emailHandler = event => setEmail(event.target.value)
  const streetHandler = event => setStreet(event.target.value)
  const suiteHandler = event => setSuite(event.target.value)
  const cityHandler = event => setCity(event.target.value)
  const zipcodeHandler = event => setZipcode(event.target.value)
  const latHandler = event => setLat(event.target.value)
  const lngHandler = event => setLng(event.target.value)
  const phoneHandler = event => setPhone(event.target.value)
  const websiteHandler = event => setWebsite(event.target.value)
  const companyNameHandler = event => setCompanyName(event.target.value)
  const companyCatchPhraseHandler = event => setCompanyCatchPhrase(event.target.value)
  const companyBsHandler = event => setCompanyBs(event.target.value)

  const submitHandler = async event => {
    event.preventDefault()

    const newUser = {
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat,
          lng
        }
      },
      phone,
      website,
      company: {
        name: companyName,
        catchPhrase: companyCatchPhrase,
        bs: companyBs
      }
    }

    if (editUserData) {
      newUser.id = editUserData.id
    }

    onUserSubmit(newUser)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" value={username} onChange={usernameHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="street">Street:</label>
        <input type="text" name="street" id="street" value={street} onChange={streetHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="suite">Suite:</label>
        <input type="text" name="suite" id="suite" value={suite} onChange={suiteHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" value={city} onChange={cityHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="zipcode">Zipcode:</label>
        <input type="text" name="zipcode" id="zipcode" value={zipcode} onChange={zipcodeHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="lat">Lat:</label>
        <input type="text" name="lat" id="lat" value={lat} onChange={latHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="lng">Lng:</label>
        <input type="text" name="lng" id="lng" value={lng} onChange={lngHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="phone">Phone:</label>
        <input type="phone" name="phone" id="phone" value={phone} onChange={phoneHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="website">Website:</label>
        <input type="text" name="website" id="website" value={website} onChange={websiteHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="company-name">Company Name:</label>
        <input type="text" name="company-name" id="company-name" value={companyName} onChange={companyNameHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="company-catch-phrase">Company catch-phrase:</label>
        <input type="text" name="company-catch-phrase" id="company-catch-phrase" value={companyCatchPhrase} onChange={companyCatchPhraseHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="company-catch-bs">Company catch-Bs:</label>
        <input type="text" name="company-catch-bs" id="company-catch-bs" value={companyBs} onChange={companyBsHandler} />
      </div>

      <button type="submit">
        {editUserData ? 'Edit User' : 'Create User'}
      </button>
    </form>
  )
}

export default UserForm