import { useState } from 'react'
import './App.css'
import { TbPencilPlus } from 'react-icons/tb'
import { RiCheckboxBlankFill, RiDeleteBin6Line } from 'react-icons/ri'
import { v4 as uuid } from "uuid"

const toDoStart = [
  {
    id: uuid(),
    text: "test",
    complete: false,
  },
  {
    id: uuid(),
    text: "test",
    complete: false,
  }
]

function App() {
  const [toDo, settoDo] = useState(toDoStart)
  const [popUp, setPopUp] = useState(false)

  return (
    <>
      { popUp &&
        <div className="popup-container"> 
        <div className="popup">
          <p className="popup-title">
            New Task
          </p>
          <input className="popup-input"
          type="text" 
          value="" 
          />
          <div className="popup-buttons-container">
            <button className="popup-button back"> 
              Return
            </button>
            <button className="popup-button add"> 
              Add New Task
            </button>
          </div>
        </div>
        </div>
      }
      <div className="header">
        <div className="header-container">
          <p className="header-title">My Tasks</p>
          <div className="header-add">
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
                <p className="todo-checkbox">
                  { toDos.complete ? <RiCheckboxBlankFill /> : <div> Hello</div>}
                 
                </p>
                <p className="todo-text">
                  {toDos.text}
                </p>
            </div>
              <p className="todo-delete">
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
