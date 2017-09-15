import { combineReducers } from 'redux'
import user from './user'
import transaction from './transaction'

const rootReducer = combineReducers({ user })

export default rootReducer
