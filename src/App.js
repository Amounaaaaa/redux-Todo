import './App.css';
import React from "react";
import {store} from './store'
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { useSelector,useDispatch } from 'react-redux'
import {FilterTodo} from './Actions/Actions'
import {Navbar,Form,Nav,FormControl,Button,Accordion,Card,Col,Image} from 'react-bootstrap';


function App() {
     const tasks = useSelector(state => state.reducer.tasks)
    const filter=useSelector(state=>state.filterReducer)
    const dispach=useDispatch()




    return (
      <>
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">ToDo ...</Navbar.Brand>

    <Form inline>
    </Form>
  </Navbar>
  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
    </Card.Header>
    <Accordion.Collapse eventKey="0">

      <Card.Body className="cardBody">
      <div style={{margin:'10px'}} >
     <button onClick={()=>dispach(FilterTodo(null))} class="btn btn-outline-warning">All</button>
     <button onClick={()=>dispach(FilterTodo(true))}class="btn btn-outline-success">IsDone</button>
     <button onClick={()=>dispach(FilterTodo(false))} class="btn btn-outline-danger">UnDone</button>
     </div>
       <AddTask/>
       <TaskList   tasks={filter===null? tasks:tasks.filter(el=>el.isDone ===filter)}/>
      <p style={{ margin:'9px 135px 3px', textShadow: '2px 2px 5px red'}} ></p>
      </Card.Body>


    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>

    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

      <Col>

       </Col>

      </>

  );

    }



export default App;
