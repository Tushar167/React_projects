import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'
// uuidv4();

const ToDoWrapper = () => {
    const [todos, settodos] = useState([])

    const addTodo=(todo)=>{
        settodos([...todos,{id : uuidv4(), task : todo, completed : false}])
    }
    // console.log(todos)
    const toggleComplete = (id) =>{
        settodos(todos.map((todo)=>{
            return todo.id === id ? {...todo,completed : !todo.completed}: todo}))
    }

    const deleteTodo = (id) =>{
        settodos(todos.filter((todo)=>{
            return todo.id === id ? "" : todo
        }))
    }

  return (
    <div className='TodoWrapper' style={{textAlign : 'center'}}>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo,index)=>(
        <Todos task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}

    </div>
  )
}

export default ToDoWrapper
