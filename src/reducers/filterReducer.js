import {FILTER_TODO} from '../Actions/types'


const filterReducer = (state=null,action)=>{
    switch (action.type) {
        case FILTER_TODO:
            return action.payload

        default:
            return state
    }
}

export default filterReducer
