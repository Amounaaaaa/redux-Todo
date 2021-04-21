import {ADD_TODO,DELETE_TODO,EDIT_TODO} from './Actions'
import {tasks} from './tasks'

 export let  reducer =(state = tasks,action)=>{
    let newTask;
     switch(action.type)
     {    
     case ADD_TODO :
        newTask=[...state];
         newTask.push(action.payload);
         return newTask;break;
     case DELETE_TODO :
         newTask=[...state];
         newTask=newTask.filter(todo=>todo.id!==action.payload)
         return newTask;break;
     case EDIT_TODO :break


     }

     return state;
 }

 export default reducer


