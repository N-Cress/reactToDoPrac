import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuid } from "uuid";
import Popup from './components/Popup';
import Header from './components/Header';
import List from './components/List';


function App() {
  const [toDo, setToDo] = useState(() => {
    const storedList = localStorage.getItem('toDoList')
    return storedList ? JSON.parse(storedList) : [];
  })
  const [popUp, setPopUp] = useState(false)
  const [newTaskText, setNewTaskText] = useState("")
  const [taskError, setTaskError] = useState(false)

useEffect(() => {
  localStorage.setItem("toDo", JSON.stringify(toDo));
}, [toDo]);


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
      <Popup
        popUp={popUp}
        setPopUp={setPopUp}
        setNewTaskText={setNewTaskText}
        newTaskText={newTaskText}
        taskError={taskError}
        handleNewTask={handleNewTask}
        />
      <Header
        setPopUp={setPopUp}
        />
      <List 
      toDo={toDo}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
      /> 
    </>
  )
}

export default App
