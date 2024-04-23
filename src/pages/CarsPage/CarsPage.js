import { useEffect, useState } from "react"
import { v4 as uuid } from 'uuid';
import CarsList from "../../components/CarsList/CarsList";
import CarForm from "../../components/CarForm/CarForm";

const CarsPage = () => {
  const INITIAL_CARS = [
    {
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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

  const [cars, setCars] = useState([])
  const [editCar, setEditCar] = useState(null)

  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch('http://localhost:3000/cars')
      const data = await res.json()

      setCars(data.reverse())
    }

    fetchCars()
  }, [])

  const newCarHandler = async (newCar) => {
    // fetch('http://localhost:3000/cars', {
    //   method: 'POST',
    //   body: JSON.stringify(newCar),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(createdCar => {
    //     setCars(prevState => [createdCar, ...prevState])
    //   })
    
    const res = await fetch('http://localhost:3000/cars', {
      method: 'POST',
      body: JSON.stringify(newCar),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const createdCar = await res.json()
    setCars(prevState => [createdCar, ...prevState])
    
  }

  const deleteCarHandler = id => {
    fetch('http://localhost:3000/cars/' + id, {
      method: 'DELETE',
    })

    setCars(prevState => prevState.filter(car => car.id !== id))
  }

  const editCarHandler = id => {
    const clickedCar = cars.find(car => car.id === id)
    setEditCar(clickedCar)
  }

  const updateCarHandler = async carData => {
    const res = await fetch('http://localhost:3000/cars/' + carData.id, {
      method: 'PUT',
      body: JSON.stringify(carData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const updatedCar = await res.json()

    setCars(prevState => {
        const newState = prevState.map(car => car.id === updatedCar.id ? updatedCar : car)

        return newState
    })

    setEditCar(null)
  }

  return (
    <div>
      <CarForm onUpdateCar={updateCarHandler} editCar={editCar} onNewCar={newCarHandler} />

      <CarsList onEditCar={editCarHandler} onDeleteCar={deleteCarHandler} data={cars} />
    </div>
  )
}

export default CarsPage
