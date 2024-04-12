import { useState } from "react"
import CarsList from "../../components/CarsList/CarsList";

const CarsPage = () => {

  const INITIAL_CARS = [
    {
        brand: 'Volvo',
        model: 'xc 70',
        engine: 'diesel',
        basePrice: 17000,
        mileage: 15000,
        color: 'red',
        image: 'https://res.cloudinary.com/caradvice/image/private/q_auto/v1/678e9ed107c61a5d478f71703e259aca',
        discount: 15,
    },
    {
        brand: 'Toyota',
        model: 'Camry',
        engine: 'petrol',
        basePrice: 20000,
        mileage: 250000,
        color: 'blue',
        image: 'https://www.cnet.com/a/img/resize/2bf1d319e1b6b6135eaa226c0a48b2c557501a8b/hub/2021/08/20/4b392287-347f-4374-b152-69e0366821a7/2021-toyota-camry-trd-4.jpg?auto=webp&width=1200',
        discount: 50,
    },
    {
        brand: 'Honda',
        model: 'Civic',
        engine: 'electric',
        basePrice: 22000,
        mileage: 300000,
        color: 'special blue',
        image: 'https://i.pinimg.com/originals/7b/66/a9/7b66a9330e4a74fe3f826f01a83c988b.jpg',
        discount: 7,
    },
    {
        brand: 'Ford',
        model: 'Fiesta',
        engine: 'petrol',
        basePrice: 15000,
        mileage: 600000,
        color: 'black',
        image: 'https://m.atcdn.co.uk/vms/media/%7Bresize%7D/f1d4aa6eaf0441a7b76fa7075757c607.jpg',
        discount: 23,
    },
    {
        brand: 'BMW',
        model: 'X3',
        engine: 'diesel',
        basePrice: 35000,
        mileage: 0,
        color: 'white',
        image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/110503/x3-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80',
        discount: 0,
    },
    {
        brand: 'Mercedes-Benz',
        model: 'C-Class',
        engine: 'electric',
        basePrice: 40000,
        mileage: 0,
        color: 'gray',
        image: 'https://media.ed.edmunds-media.com/mercedes-benz/c-class/2024/oem/2024_mercedes-benz_c-class_sedan_amg-c-43_fq_oem_1_1280.jpg',
        discount: 0,
    },
    {
        brand: 'Audi',
        model: 'A4',
        engine: 'petrol',
        basePrice: 38000,
        mileage: 0,
        color: 'red',
        image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/51909/a4-exterior-left-front-three-quarter-3.jpeg?q=80&q=80',
        discount: 0,
    },
    {
        brand: 'Chevrolet',
        model: 'Malibu',
        engine: 'diesel',
        basePrice: 25000,
        mileage: 0,
        color: 'blue',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo85ik5iPZia1Vr9mbSu34FNZVHx0upGhBWeAPXCF1Vw&s',
        discount: 0,
    },
    {
        brand: 'Nissan',
        model: 'Altima',
        engine: 'petrol',
        basePrice: 23000,
        mileage: 0,
        color: 'silver',
        image: 'https://i.gaw.to/content/photos/55/01/550195-nissan-altima-2022.jpeg',
        discount: 0,
    }
  ];

  const [cars, setCars] = useState(INITIAL_CARS)

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

  const newCarHandler = event => {
    event.preventDefault()
    
    const newCar = {
      brand,
      model,
      engine,
      basePrice,
      mileage,
      color,
      image,
      discount
    }

    setCars(prevState => [newCar, ...prevState])

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
    <div>
      <form onSubmit={newCarHandler}>
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

      <CarsList data={cars} />
    </div>
  )
}

export default CarsPage
