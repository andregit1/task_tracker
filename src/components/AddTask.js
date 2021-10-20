import { useState } from "react";

const Addtask = ({ actionAdd }) => {
  const [text,     setText]     = useState('')
  const [dayntime,  setDayntime]  = useState('')
  const [reminder, setReminder] = useState(false)
  const onSubmitfunc = (e) => {
    e.preventDefault()

    if(!text) {
      alert('write text please')
      return
    }

    actionAdd({ text, dayntime, reminder })

    setText('')
    setDayntime('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmitfunc}>
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
          value={dayntime} 
          onChange={(e) => setDayntime(e.target.value)} 
        />
      </div>
      
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
          type='checkbox'
          checked={reminder}
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)} 
        />
      </div>

      <input type='submit' value='save task' className='btn btn-block'/>
    </form>
  );
}

export default Addtask;
