import { useState } from "react"

const CounterPage = () => {
  const INITIAL_NUM = 5

  const [num, setNum] = useState(INITIAL_NUM)

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
      <button onClick={() => numHandler(5)} disabled={num > 5}>+5</button>
      <button onClick={() => numHandler(2)} disabled={num > 8}>+2</button>
      <button onClick={() => numHandler(1)} disabled={num > 9}>+1</button>
      <button onClick={() => numHandler(-1)} disabled={num <= 1}>-1</button>
      <button onClick={() => numHandler(-2)} disabled={num <= 2}>-2</button>
      <button onClick={() => numHandler(-5)} disabled={num <= 5}>-5</button>
      <button onClick={() => setNum(INITIAL_NUM)}>Reset</button>
    </div>
  )
}

export default CounterPage