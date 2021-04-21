import './App.css';
import React from "react";
import {store} from './redux/store'
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import {Col} from 'react-bootstrap'
function App(props) {
    

    


    return (
      <> 
     <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
      <Col>
      <AddTask/>
       <TaskList/>
       </Col>
      
      </>
  
  );

    }



export default App;
