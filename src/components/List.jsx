/* eslint-disable react/prop-types */
import Item from "./Items";


function List({ toDo, toggleComplete, deleteTask }) {
    return (
        <>
        <div className="todo-list">
        {toDo.map(toDos => {
          return (
            <Item
              complete={toDos.complete}
              key={toDos.id}
              id={toDos.id}
              text={toDos.text}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
            )
        })}
        
      </div>
      </>
    )
}

export default List;