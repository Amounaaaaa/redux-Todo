import {ADD_TODO,DELETE_TODO,EDIT_TODO,FILTER_TODO,TOOGLE_TODO} from './types'


export function addTodo(todo){
    return {
        type:ADD_TODO,
        payload:todo
    }

}
export function deleteTodo(todoId){
    return {
        type: DELETE_TODO,
        payload:todoId
    }

}
export const editTodo=(newTodo)=>{
    return {
        type :EDIT_TODO,
        payload:newTodo
    }
}
export const  FilterTodo=(filter)=> {
    return {
        type: FILTER_TODO,
        payload: filter

    }
}
    export const toogleTask = (idTodo)=>{
        return {
            type: TOOGLE_TODO,
            payload:idTodo
        }
    }



