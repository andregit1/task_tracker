import { FaTimes } from 'react-icons/fa'

const Task = ({ taskObject, deleteProp, toggleProp }) => {
  return (
    <div 
      className={
        `task ${taskObject.reminder ? 'reminder' : ''}`
      }
      
      // js function
      onDoubleClick={() => toggleProp(taskObject.id)}
    >
      
      <h3>
        {taskObject.text}
        <FaTimes 
          style={{
            color: 'red',
            cursor: 'pointer'
          }}
          // js function
          // onClick={deleteProp}
          onClick={() => deleteProp(taskObject.id)}
        />
      </h3>
      
      <p>{taskObject.dayntime}</p>
    </div>
  );
}

export default Task;
