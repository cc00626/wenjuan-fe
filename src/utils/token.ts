const TOKEN_KEY = 'token'

//获取用户token
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

//存储用户token
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

//删除用户token
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
