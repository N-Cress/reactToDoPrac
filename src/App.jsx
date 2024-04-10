import { useState } from 'react'
import './App.css'
import { TbPencilPlus } from 'react-icons/tb'
import { RiCheckboxBlankFill, RiCheckboxFill, RiDeleteBin6Line } from 'react-icons/ri'
import { v4 as uuid } from "uuid"

const toDoStart = [
  {
    id: uuid(),
    text: "test",
    complete: true,
  },
  {
    id: uuid(),
    text: "test",
    complete: false,
  }
]

function App() {
  const [toDo, setToDo] = useState(toDoStart)
  const [popUp, setPopUp] = useState(false)
  const [newTaskText, setNewTaskText] = useState("")
  const [taskError, setTaskError] = useState(false)

function handleNewTask()  {
  if (newTaskText !== "") {
    setToDo(current => {
      return [...current,
      {
        id: uuid(),
        text: newTaskText,
        complete: false,
      }
      ]
    })
    setPopUp(false)
    setNewTaskText("")
    setTaskError(false)
  }
  else {
    setTaskError(true)
  }
}

function toggleComplete(id) {
  setToDo(current => {
    return current.map(item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      } 
      return item;
    })
  })
}

function deleteTask(id) {
  setToDo(current => {
    return current.filter(item => item.id !== id)
  })
}

  return (
    <>
      { popUp &&
        <div className="popup-container"> 
        <div className="popup">
          <p className="popup-title">
            New Task
          </p>
          { taskError && 
            <p className="popup-error">
              Error: Please enter text into the field before submitting
            </p>
          }
          <input className="popup-input"
          type="text" 
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          />
          <div className="popup-buttons-container">
            <button onClick={()=> setPopUp(false)} className="popup-button back"> 
              Return
            </button>
            <button onClick={handleNewTask} className="popup-button add"> 
              Add New Task
            </button>
          </div>
        </div>
        </div>
      }
      <div className="header">
        <div className="header-container">
          <p className="header-title">My Tasks</p>
          <div onClick={() => setPopUp(true)}className="header-add">
            <TbPencilPlus />
          </div>
        </div>
      </div>
      <hr  className="header-break" />
      <div className="todo-list">
        {toDo.map(toDos => {
          return (
            <>
            <div className="todo-container" key={toDos.key}>
              <div className="todo-container-left">
                <p onClick={() => toggleComplete(toDos.id)}className="todo-checkbox">
                  { toDos.complete ? <RiCheckboxFill /> : <RiCheckboxBlankFill />}
                 
                </p>
                <p className="todo-text">
                  {toDos.text}
                </p>
            </div>
              <p onClick={() => deleteTask(toDos.id)} className="todo-delete">
                <RiDeleteBin6Line />
              </p>
            </div>
            </>
            )
        })}
        
      </div>
    </>
  )
}

export default App
