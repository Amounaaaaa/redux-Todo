import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Actions/Actions'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Modal,Button,InputGroup,FormControl} from 'react-bootstrap';



const AddTask = () => {
    let dispach=useDispatch()
    let  [description, setDescription] = useState()
    return (
        <div>
            <InputGroup>
                <FormControl style={{width:'50px'}}
                    placeholder="Todo.."value={description} onChange={(e)=>setDescription(e.target.value)}
                />
                <InputGroup.Append>
                    <Button style={{ marginLeft:'5px',width:'100px', textShadow: '2px 2px 5px red'}} class="btn btn-primary"  onClick={()=>dispach(addTodo(
                        {
                            id:uuidv4(),
                            description:description,
                            isDone:false
                        }), setDescription('')) } > Add
                    </Button>
                </InputGroup.Append>
            </InputGroup>




        </div>
    )
}

export default AddTask
