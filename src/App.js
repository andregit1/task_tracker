import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/AddTask";

const App = () => {
  const [arrTasks, setArrTasks] = useState([
    {
      id: 1, 
      text: "first task...",
      day: "Oct 19th at 15:24pm",
      reminder: true,
    },
    {
      id: 2, 
      text: "second task...",
      day: "Oct 20th at 16:25pm",
      reminder: true,
    },
    {
      id: 3, 
      text: "third task...",
      day: "Oct 21st at 17:26pm",
      reminder: true,
    },
  ])

  // addTask action
  

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
      <Header />
      
      <Addtask />

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
