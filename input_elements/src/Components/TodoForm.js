import React,{useState} from 'react'

const TodoForm = (props) => {
    let {addTodo} = props
    const [val, setval] = useState("")
    const handleSubmit = (event) =>{
        event.preventDefault();
        addTodo(val)
        setval("")
    }
  return (
    <div>
      <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='What is the Task Today' value={val} onChange={(e)=>{setval(e.target.value)}}/>
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
