import axios, {ResDataType} from '../services/ajax'
//登录
export async function userLogin(username: string, password: string): Promise<ResDataType> {
  const data = (await axios.post('/api/user/login', {username, password})) as ResDataType
  return data
}

//注册
export async function userRegister(
  username: string,
  password: string,
  nickname: string
): Promise<ResDataType> {
  const data = (await axios.post('/api/user/register', {
    username,
    password,
    nickname,
  })) as ResDataType
  return data
}

//获取用户信息
export async function getUserInfo(): Promise<ResDataType> {
  const data = (await axios.get('/api/user/info')) as ResDataType
  return data
}
