import myAxios from './myAxios'

export const reqLogin = ({ username, password }) => myAxios.post('/login', { username, password })
