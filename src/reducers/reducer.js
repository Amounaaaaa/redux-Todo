import {ADD_TODO,DELETE_TODO,EDIT_TODO,FILTER_TODO,TOOGLE_TODO} from '../Actions/types'

let  initialState ={
    tasks:[
        {id:1,
        description:'desc',
        isDone:false
        },
       {id:2,
        description:'desc',
        isDone:false,

       },
       {id:3,
        description:'desc',
        isDone:true,

       }],

    filter:null
}
 export let  reducer =(state = initialState,action)=>{
    let newTask;
     switch(action.type)
     {
     case ADD_TODO :

         return{
             ...state,tasks:[...state.tasks,action.payload]
         };
     case DELETE_TODO :

         return {...state,tasks:state.tasks.filter(el=>el.id!==action.payload)} ;
         case EDIT_TODO:

        return {
                   tasks:state.tasks.map(el=>el.id===action.payload.id? action.payload:el)

}
    case FILTER_TODO:
         return {
             ...state,
             filter:action.payload
         }
         case TOOGLE_TODO:
             return {
                 tasks:state.tasks.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}:el)
             }


     }

     return state;
 }

 export default reducer


