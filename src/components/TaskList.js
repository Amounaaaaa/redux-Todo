import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'


const TaskList = () => {
    const tasks = useSelector(state => state.reducer)
    return (
        <div>
            {tasks.map(todo=>{
                return <Task key={todo.id}  todo={todo}/>



})}
 
        </div>
    )
}

export default TaskList

