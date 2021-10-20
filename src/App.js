import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [arrTasks, setArrTasks] = useState([
    {
      id: 1, 
      text: "first task...",
      dayntime: "Oct 19th at 15:24pm",
      reminder: true,
    },
    {
      id: 2, 
      text: "second task...",
      dayntime: "Oct 20th at 16:25pm",
      reminder: true,
    },
    {
      id: 3, 
      text: "third task...",
      dayntime: "Oct 21st at 17:26pm",
      reminder: true,
    },
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
