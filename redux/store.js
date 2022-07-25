import {createStore, combineReducers} from 'redux'; 
import reducerCouses from './reducers/reducerCourses';
import reducerCart from './reducers/reducerCart';
import reducerPayment from './reducers/reducerPayment';
import reducerAuth from './reducers/reducerAuth';
const rootReducer = combineReducers(
    {
        courses: reducerCouses, 
        cart: reducerCart, 
        payments: reducerPayment, 
        auth:reducerAuth
    }
)
const store = createStore(rootReducer);


export default store; 