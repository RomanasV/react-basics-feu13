import { useState } from "react"
// import './StylingPage.css'

// import styled from 'styled-components'

// import styles from './StylingPage.module.css'
import styles from './StylingPage.module.scss'

// const FormControl = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

//   border: 2px solid rgba(0, 0, 0, 0.5);
//   padding: 20px;
//   border-radius: 20px;
//   background-color: white;
//   box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);

//   &.invalid label {
//     color: red;
//   }

//   &.invalid input {
//     border-color: red;
//     background-color: pink;
//   }
// `

// Styled Component with props
// const FormControl = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

//   border: 2px solid rgba(0, 0, 0, 0.5);
//   padding: 20px;
//   border-radius: 20px;
//   background-color: white;
//   box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);

//   label {
//     color: ${props => props.$invalid ? 'red' : 'black'};
//   }

//   input {
//     border-color: ${props => props.$invalid ? 'red' : 'black'};
//     background-color: ${props => props.$invalid ? 'pink' : 'white'};
//   }
// `

// const SubmitButton = styled.button`
//   text-transform: uppercase;
//   padding: 15px;
//   color: blue;
//   font-weight: bold;
// `

const StylingPage = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [isValid, setIsValid] = useState(true)

  const taskHandler = event => setTask(event.target.value)

  const newTaskHandler = event => {
    event.preventDefault()

    if (task.trim().length === 0) {
      setIsValid(false)
      return
    }
    
    setTasks(prevState => [task, ...prevState])
    setTask('')
    setIsValid(true)
  }

  return (
    <div>
      <form className="test" onSubmit={newTaskHandler}>
        {/* Inline Styling */}
        {/* <div className="form-control">
          <label htmlFor="task" style={{ color: isValid ? 'black' : 'red' }}>Task:</label>
          <input type="text" name="task" id="task" value={task} onChange={taskHandler} style={{ borderColor: isValid ? 'black' : 'red', backgroundColor: isValid ? 'white' : 'pink' }} />
        </div> */}

        {/* Priskirti dinamišką klasė */}
        {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
          <label htmlFor="task">Task:</label>
          <input type="text" name="task" id="task" value={task} onChange={taskHandler} />
        </div> */}

        {/* Styled components: Priskirti dinamišką klasė */}
        {/* <FormControl className={`form-control ${!isValid ? 'invalid' : ''}`}>
          <label htmlFor="task">Task:</label>
          <input type="text" name="task" id="task" value={task} onChange={taskHandler} />
        </FormControl> */}
        
        {/* Styled components: per props perduodama informacija */}
        {/* <FormControl $invalid={!isValid} className="form-control">
          <label htmlFor="task">Task:</label>
          <input type="text" name="task" id="task" value={task} onChange={taskHandler} />
        </FormControl> */}

        {/* CSS MODULES */}
        <div className={`${styles.formControl} ${!isValid ? styles.invalid : ''}`}>
          <label htmlFor="task">Task:</label>
          <input type="text" name="task" id="task" value={task} onChange={taskHandler} />
        </div>

        {/* <SubmitButton type="submit">Add Task</SubmitButton> */}
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default StylingPage