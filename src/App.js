import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [arrTasks, setArrTasks] = useState([
  // move to db.json
  ])

  // addTask action
  const addTask = (taskObject) => {
    // console.log(taskObject)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...taskObject }
    setArrTasks([...arrTasks, newTask])
  }

  // deleteTask action
  const deleteTask = (id) => {
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
