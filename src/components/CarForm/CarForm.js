import { useState } from "react"

const CarForm = ({ onNewCar }) => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [engine, setEngine] = useState('petrol')
  const [basePrice, setBasePrice] = useState(0)
  const [mileage, setMileage] = useState(0)
  const [color, setColor] = useState('black')
  const [image, setImage] = useState('')
  const [discount, setDiscount] = useState(0)

  const brandHandler = event => setBrand(event.target.value)
  const modelHandler = event => setModel(event.target.value)
  const engineHandler = event => setEngine(event.target.value)
  const basePriceHandler = event => setBasePrice(Number(event.target.value))
  const mileageHandler = event => setMileage(Number(event.target.value))
  const colorHandler = event => setColor(event.target.value)
  const imageHandler = event => setImage(event.target.value)
  const discountHandler = event => setDiscount(Number(event.target.value))

  const formSubmitHandler = event => {
    event.preventDefault()
    
    const newCar = {
      brand,
      model,
      engine,
      basePrice,
      mileage,
      color,
      image,
      discount,
    }

    onNewCar(newCar)

    setBrand('')
    setModel('')
    setEngine('petrol')
    setBasePrice(0)
    setMileage(0)
    setColor('black')
    setImage('')
    setDiscount(0)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" id="brand" placeholder="Brand" value={brand} onChange={brandHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="model">Model:</label>
        <input type="text" name="model" id="model" value={model} onChange={modelHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="engine">Engine type:</label>
        <select name="engine" id="engine" value={engine} onChange={engineHandler}>
          <option value="petrol">Petrol</option>
          <option value="electric">Electric</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="base-price">Base price:</label>
        <input type="number" name="base-price" id="base-price" value={basePrice} onChange={basePriceHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="mileage">Mileage:</label>
        <input type="number" name="mileage" id="mileage" value={mileage} onChange={mileageHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="color">Color:</label>
        <select name="color" id="color" value={color} onChange={colorHandler}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="silver">Silver</option>
          <option value="white">White</option>
          <option value="special blue">Special blue</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" id="image" value={image} onChange={imageHandler} />
      </div>
      
      <div className="form-control">
        <label htmlFor="discount">Discount:</label>
        <input type="number" name="discount" id="discount" min="0" max="100" value={discount} onChange={discountHandler} />
      </div>

      <button type="submit">Create New Car</button>
    </form>
  )
}

export default CarForm