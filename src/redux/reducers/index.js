import { combineReducers } from 'redux'
import saveUserInfoReducer from './login_reducers'


export default combineReducers({
  userInfo: saveUserInfoReducer
})