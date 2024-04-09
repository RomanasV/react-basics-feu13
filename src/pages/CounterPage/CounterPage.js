import { useState } from "react"

const CounterPage = () => {
  const [num, setNum] = useState(5)

  const plus1Handler = () => setNum(num + 1)
  const minus1Handler = () => setNum(num - 1)

  const displayColor = num >= 5 ? 'green' : 'red'

  return (
    <div>
      <h3 style={{color: displayColor}}>{num}</h3>
      <button onClick={plus1Handler} disabled={num > 9}>+1</button>
      <button onClick={minus1Handler} disabled={num <= 1}>-1</button>
    </div>
  )
}

export default CounterPage