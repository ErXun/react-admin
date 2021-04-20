import { SAVE_USER_INFO, DELETE_USER_INFO } from '../constant'

// 登录
export const saveUserInfoAction = data => {
  localStorage.setItem('user', JSON.stringify(data.user))
  localStorage.setItem('token', data.token)
  return { type: SAVE_USER_INFO, data }
}

// 退出
export const deleteUserInfoAction = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  return { type: DELETE_USER_INFO }
}