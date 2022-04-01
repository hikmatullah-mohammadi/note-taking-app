import { combineReducers } from 'redux'
import noteReducer from './noteReducer'
import navReducer from './navReducer'
export default combineReducers({
  noteReducer,
  navReducer
})