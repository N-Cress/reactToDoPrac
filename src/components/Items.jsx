import { RiCheckboxBlankFill, RiCheckboxFill, RiDeleteBin6Line } from 'react-icons/ri'

// eslint-disable-next-line react/prop-types
function Item({ id, key, toggleComplete, text, deleteTask, complete}) {
    return (
        <div className="todo-container" key={key}>
            <div className="todo-container-left">
                <p onClick={() => toggleComplete(id)}className="todo-checkbox">
                  { complete ? <RiCheckboxFill /> : <RiCheckboxBlankFill />}
                </p>
                <p className="todo-text">
                  {text}
                </p>
            </div>
              <p onClick={() => deleteTask(id)} className="todo-delete">
                <RiDeleteBin6Line />
              </p>
        </div>
    )
}

export default Item;