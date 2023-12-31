import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todos = ({task , toggleComplete,deleteTodo}) => {
    useEffect(()=>{
        console.log('mount',task.task)

        return () =>{
            console.log("unmount")
        }
    },[])
  return (
    <div className='Todo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed? "completed" : ""}`}>{task.task}</p>
        <div>
            {/* <FontAwesomeIcon icon={faPenToSquare}/> */}
            <FontAwesomeIcon icon={faTrash} onClick={()=>{deleteTodo(task.id)}}/>
        </div>
    </div>
  )
}

export default Todos
