import { useState } from "react"

const CounterPage = () => {
  const INITIAL_NUM = 5

  const [num, setNum] = useState(INITIAL_NUM)
  const [grades, setGrades] = useState([])

  const numHandler = count => {
    // setNum(num + count)

    // setNum(prevState => {
    //   return prevState + count
    // })

    setNum(prevState => prevState + count)
  }
  
  const inputNumHandler = event => setNum(Number(event.target.value))

  const addGradeHandler = () => {
    // setGrades(prevState => {
    //   // const newState = [...prevState]
    //   // newState.unshift(num)

    //   const newState = [num, ...prevState]
    //   return newState
    // })

    setGrades(prevState => [num, ...prevState])
  }

  // const getColor = grade => {
  //   if (grade >= 5) {
  //     return 'green'
  //   } else {
  //     return 'red'
  //   }
  // }

  const deleteGradeHandler = (index) => {
    console.log(index, grades)
  }

  const getColor = grade => grade >= 5 ? 'green' : 'red'

  return (
    <div>
      <input type="number" min="1" max="10" value={num} onChange={inputNumHandler} />
      <h3 style={{color: getColor(num)}}>{num}</h3>

      <button onClick={() => numHandler(5)} disabled={num > 5}>+5</button>
      <button onClick={() => numHandler(2)} disabled={num > 8}>+2</button>
      <button onClick={() => numHandler(1)} disabled={num > 9}>+1</button>
      <button onClick={() => numHandler(-1)} disabled={num <= 1}>-1</button>
      <button onClick={() => numHandler(-2)} disabled={num <= 2}>-2</button>
      <button onClick={() => numHandler(-5)} disabled={num <= 5}>-5</button>
      
      <button onClick={() => setNum(INITIAL_NUM)}>Reset</button>

      <button onClick={addGradeHandler}>Add Grade</button>

      <div>
        <h4>{grades.length > 0 ? 'Grades:' : 'No grades yet... Please add a grade.'}</h4>

        {grades.length > 0 && (
          <ul>
            {grades.map((grade, index) => (
              
              <li style={{color: getColor(grade)}} key={index}>
                {grade}

                <button onClick={() => deleteGradeHandler(index)}>X</button>
              </li>
            
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CounterPage