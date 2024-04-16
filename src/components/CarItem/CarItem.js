const CarItem = ({ onDeleteCar, data, onEditCar }) => {
  const { brand, model, color, basePrice, discount, engine, image, mileage, id } = data

  if (!brand || !model || !basePrice) {
    return ''
  }

  const imageElement = image && <img src={image} alt={`${color} ${brand} ${model}`} />

  const enginePrice = () => {
    switch(engine) {
      case 'electric':
        return 10000
      case 'diesel':
        return 7500
      case 'hybrid':
        return 5000
      default:
        return 0
    }
  }

  const baseColors = ['black', 'red', 'blue', 'silver', 'white', 'special blue']

  const colorPrice = () => {
    if (color === 'special blue') {
      return 500
    }

    if (!baseColors.includes(color)) {
      return 3000
    }

    return 0
  }

  const extrasPrice = enginePrice() + colorPrice()
  
  const mileageDiscount = () => {
    if (mileage > 400000) {
      return 50
    }

    if (mileage > 100000) {
      return 30
    } 

    if (mileage > 50000) {
      return 20
    }
    
    if (mileage > 20000) {
      return 15
    }
    
    if (mileage > 0) {
      return 10
    }

    return 0
  }

  const getMileageDiscount = Math.round(basePrice / 100 * mileageDiscount())

  const getDiscount = Math.round(basePrice / 100 * discount)

  const getTotalDiscount = getMileageDiscount + getDiscount

  const totalPriceBeforeVAT = basePrice + extrasPrice - getTotalDiscount
  const VAT = Math.round(totalPriceBeforeVAT * 0.21)
  const totalPriceAfterVAT = totalPriceBeforeVAT + VAT

  const editHandler = () => onEditCar(id)
  const deleteHandler = () => onDeleteCar(id)

  return (
    <div className="car-item">
      {imageElement}

      <h2 className="car-title">{brand} ({model})</h2>

      <div className="car-price-wrapper">
        <div className="car-price-group">
          <h3>Bazinė kaina: {basePrice}€</h3>
        </div>

        <div className="car-price-group">
          <h3>Papildomos paslaugos</h3>
          <ul className="car-price-list">
            <li>Variklio tipas ({engine}): {enginePrice()}€</li>
            <li>Spalva ({color}): {colorPrice()}€</li>
            <li>Viso už papildomas paslaugas: {extrasPrice}€</li>
          </ul>
        </div>

        <div className="car-price-group">
          <h3>Kainos sumažėjimas</h3>
          <ul className="car-price-list">
            <li>Kilometražas ({mileage} km.): {mileageDiscount()}% / {getMileageDiscount}€</li>
            <li>Nuolaida ({discount}%): {getDiscount}€</li>
            <li>Bendra nuolaida: {getTotalDiscount}€</li>
          </ul>
        </div>

        <div className="car-price-group">
          <h3>Galutinė kaina</h3>
          <ul className="car-price-list">
            <li>Kaina prieš mokesčius: {totalPriceBeforeVAT}€</li>
            <li>PVM: {VAT}€</li>
            <li>Galutinė kaina su PVM: {totalPriceAfterVAT}€</li>
          </ul>
        </div>
      </div>

      <button onClick={editHandler}>Edit Car</button>
      <button onClick={deleteHandler}>Delete Car</button>
    </div>
  )
}

export default CarItem
