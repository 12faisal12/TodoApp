import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers'
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from './reducers/noteReducers'

const reducer = combineReducers({
userLogin:userLoginReducer,userRegister:userRegisterReducer,noteList:noteListReducer,noteCreate:noteCreateReducer,noteUpdate:noteUpdateReducer,noteDelete:noteDeleteReducer,userUpdate:userUpdateReducer
})

const userInfoFromLocalStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const initialState = {
    userLogin: {
        userInfo:userInfoFromLocalStorage
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store