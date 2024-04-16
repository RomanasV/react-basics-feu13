import CarItem from "../CarItem/CarItem"

const CarsList = ({ data, onDeleteCar, onEditCar }) => {
  return (
    <div className="cars-list">
      {data.length > 0 ? (
        data.map((car, index) => <CarItem onEditCar={onEditCar} onDeleteCar={onDeleteCar} data={car} key={index} />)
      ) : (
        <h2>No cars in the list. Create a new one.</h2>
      )}
    </div>
  )
}

export default CarsList