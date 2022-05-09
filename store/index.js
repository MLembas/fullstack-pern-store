import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './cashReducer'
import { cusReducer } from './cusReducer'
import { authReducer } from './authReducer'
import {composeWithDevTools} from "redux-devtools-extension"
import { userReducer } from './userReducer'
import { typesReducer } from './typeReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: cusReducer,
    auth: authReducer, 
    user: userReducer,
    types: typesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))