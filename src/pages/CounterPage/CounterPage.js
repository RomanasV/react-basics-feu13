import { useState } from "react"

const CounterPage = () => {
  const [num, setNum] = useState(5)

  // const buttonElement = document.querySelector('button')
  // buttonElement.addEventListener('click', buttonClickHandler)

  // function buttonClickHandler() {
  //   console.log('Button was clicked')
  // }

  // let num = 5

  const plus1Handler = () => {
    setNum(num + 1)
  }

  function minus1Handler() {
    setNum(num - 1)
  }

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={plus1Handler} disabled={num > 9}>+1</button>
      <button onClick={minus1Handler} disabled={num <= 1}>-1</button>
    </div>
  )
}

export default CounterPage