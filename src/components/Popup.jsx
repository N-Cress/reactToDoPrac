// eslint-disable-next-line react/prop-types
function Popup({taskError, newTaskText, setNewTaskText, handleNewTask, popUp, setPopUp}) {
    return(
         popUp &&
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
          
    )
}

export default Popup;