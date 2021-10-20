import Task from "./Task";

const Tasks = ({ collection, actionDelete, actionToggle }) => {
  return (
    <>
      {collection.map((task, index) => (
        // <Task key={task.id}>{task.text}</Task>
        <Task 
          key={index} 
          taskObject={task} 
          deleteProp={actionDelete}
          toggleProp={actionToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
