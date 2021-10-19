import Task from "./Task";

const Tasks = ({ collection, actionDelete, actionToggle }) => {
  return (
    <>
      {collection.map((task) => (
        // <Task key={task.id}>{task.text}</Task>
        <Task 
          key={task.id} 
          taskObject={task} 
          deleteProp={actionDelete}
          toggleProp={actionToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
