export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELET_TODO";
export const EDIT_TODO="EDIT_TODO";

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
export function updateTodo(todoId){
    return {
        type:EDIT_TODO,
        payload:todoId
    }

}

