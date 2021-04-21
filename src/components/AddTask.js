import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/Actions'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
    let dispach=useDispatch()
    let  [description, setDescription] = useState()
    return (
        <div>
            <input value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button onClick={()=>dispach(addTodo(
                {
                id:uuidv4(),
                description:description,
                isDone:false
                }
           ),
           setDescription('')
           
            
            ) }
        >Add</button>
        </div>
    )
}

export default AddTask
