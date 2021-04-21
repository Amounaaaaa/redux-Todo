import React from 'react';
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../redux/Actions'


const Task = ({todo}) => {
    let dispach=useDispatch()
    return (
        <div className="row mx-2 align-items-center">
            <div >
                <h4>{todo.description}</h4>
            </div>
            <button className="row mx-2 align-items-center" onClick={()=>dispach(deleteTodo(todo.id))}>remove</button>
        </div>
    )
}

export default Task
