import { useState } from "react"

const CounterPage = () => {
  const INITIAL_NUM = 5

  const [num, setNum] = useState(INITIAL_NUM)

  const checkButtonDisable = (count) => {
    if (count > 0 && num > 10 - count) {
      return true
    }

    if (count < 0 && num <= Math.abs(count)) {
      return true
    }

    return false
  }

  const buttonNums = [5, 2, 1, -1, -2, -5]

  const buttonsList = buttonNums.map((buttonNum, index) => (
    <button 
      key={index} 
      onClick={() => numHandler(buttonNum)} 
      disabled={checkButtonDisable(buttonNum)}
    >
      {buttonNum}
    </button>
  ))

  const numHandler = count => {
    // setNum(num + count)

    // setNum(prevState => {
    //   return prevState + count
    // })

    setNum(prevState => prevState + count)
  }
  
  const inputNumHandler = event => setNum(Number(event.target.value))

  const displayColor = num >= 5 ? 'green' : 'red'

  return (
    <div>
      <input type="number" min="1" max="10" value={num} onChange={inputNumHandler} />
      <h3 style={{color: displayColor}}>{num}</h3>

      {buttonsList}
      
      <button onClick={() => setNum(INITIAL_NUM)}>Reset</button>
    </div>
  )
}

export default CounterPage