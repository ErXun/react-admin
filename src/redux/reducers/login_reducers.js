/**
 * 创建一个为 Count 组件服务的 reducer;
 * reducer 的本质是一个函数，接受两个参数: preState(之前的状态)，action(动作对象) ;
 * 作用： 初始化状态，加工状态
 * redux 只负责管理状态，至于状态的改变驱动着页面的重新渲染，需额外编写
 */
import { SAVE_USER_INFO, DELETE_USER_INFO } from '../constant'

let user = JSON.parse(localStorage.getItem('user'))
let token = localStorage.getItem('token')

const initState = {
  user: user || {},
  token: token || '',
  isLogin: user && token ? true : false
}
export default function saveUserInfoReducer(preState = initState, action) {
  const { type, data } = action
  let newState
  switch (type) {
    case SAVE_USER_INFO:
      newState = {
        user: data.user,
        token: data.token,
        isLogin: true
      }
      return newState
    case DELETE_USER_INFO:
      newState = {
        user: user || {},
        token: token || '',
        isLogin: false
      }
      return newState
    default:
      return preState
  }
}
