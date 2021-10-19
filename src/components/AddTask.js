import { useState } from "react";

const Addtask = () => {
  const [text,     setText]     = useState('')
  const [daytime,  setDaytime]  = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type='text' 
          placeholder='add task' 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
          type='text' 
          placeholder='add day n time'
          value={daytime} 
          onChange={(e) => setDaytime(e.target.value)} 
        />
      </div>
      
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
          type='checkbox'
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)} 
        />
      </div>

      <input type='submit' value='save task' className='btn btn-block'/>
    </form>
  );
}

export default Addtask;
