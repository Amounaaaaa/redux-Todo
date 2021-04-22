import {createStore} from 'redux'
import rootReducer from './reducers' /** importer index.js dans Reducers ! */

export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/*  عبارة عملت ::: const store=createStore(rootReducer)
                   export default store

*/

