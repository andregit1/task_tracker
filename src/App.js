import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [arrTasks, setArrTasks] = useState([
  // move to db.json
  ])

  useEffect(
    () => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setArrTasks(tasksFromServer)
      }

      // return
      getTasks()
    }, 

    // passing dependencies
    []
  )

  // fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    
    // console.log(data)
    return data
  }

  // addTask action
  const addTask = async (taskObject) => {
    // console.log(taskObject)
    
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...taskObject }
    // setArrTasks([...arrTasks, newTask])

    const response = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(taskObject)
    })

    const data = await response.json()
    setArrTasks([...arrTasks, data])
  }

  // deleteTask action
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    // console.log('delete', id)
    setArrTasks(
      arrTasks.filter(
        (task) => task.id !== id
      )
    )
  }

  // toggle reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setArrTasks(
      arrTasks.map(
        (task) => task.id === id 
        ? { ...task, reminder: !task.reminder } 
        : task
      )
    )
  }
  
  return (
    <div className="container">
      {/* makes button add toggling */}
      <Header 
        toggleActionAdd={
          () => setShowAddTask(!showAddTask)
        }
        showAddTaskProp={showAddTask}
      />
      
      {/* if task added, show it */}
      {showAddTask && <Addtask actionAdd={addTask} />}

      {/* rendering all tasks */}
      {
        arrTasks.length > 0
        ? <Tasks 
            collection={arrTasks} 
            actionDelete={deleteTask}
            actionToggle={toggleReminder}
          />
        : 'No Tasks to show'
      }
      
    </div>
  );
}


export default App;
