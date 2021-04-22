import {React,useState} from 'react';
import {deleteTodo,editTodo,toogleTask} from '../Actions/Actions'
import { useDispatch } from "react-redux";
import {Modal,Button,InputGroup,FormControl} from 'react-bootstrap';



const Task = ({todo}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [updtatedTod, setUpdtatedTod] = useState(todo);

    const dispatch = useDispatch();
    const edit=()=>{
        dispatch(editTodo(updtatedTod))
        handleClose()

    }
    return (
        <div className="row mx-2 align-items-center">


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={updtatedTod.description} onChange={(e) =>
                        setUpdtatedTod({ ...updtatedTod, description: e.target.value })
                    }
                    ></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={edit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
             <span
                 style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
                 onClick={() => dispatch(toogleTask(todo.id))}


             >
          {todo.description}
        </span>
            <button style={{ marginTop:'2px',marginLeft:'955px',width:'100px'}} class="btn btn-danger"
                    onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>

            <Button variant="primary" onClick={handleShow}>
                Update
            </Button>
           </div>
    )
}

export default Task
