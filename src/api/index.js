import myAxios from './myAxios'

export const reqLogin = ({ username, password }) => myAxios.post('/login', { username, password })
export const reqCategory = () => myAxios.get('/manage/product/list?pageNum=1&pageSize =100')
