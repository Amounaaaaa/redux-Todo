import React from 'react'
import {} from './style.css'
import Task from './Task'
//import {Card,Button} from 'react-bootstrap'


const TaskList = ({tasks}) => {
    console.log('data : ',tasks)


    return (
        <>

            {tasks.map(todo=>{
                return <Task key={todo.id}  todo={todo}/>



})}

        </>
    )
}

export default TaskList

