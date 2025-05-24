import useGetUserInfo from './useGetUserinfo'
import {isLoginOrRegister, isNeedUserInfo} from '../router'
import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
//判断路由跳转
export function useNavPage(wattingUserInfo: boolean) {
  const {username} = useGetUserInfo() //获取用户信息
  const {pathname} = useLocation()
  const nav = useNavigate()
  useEffect(() => {
    if (wattingUserInfo) return

    //有用户信息.不可以跳转至登录页,注册页
    if (username) {
      //判断是否去登录页
      if (isLoginOrRegister(pathname)) {
        nav('/manage/list')
      }
      return
    }
    //没有用户信息,不可以跳转列表页,返回登录页
    if (!isNeedUserInfo(pathname)) {
      nav('/login')
      return
    }
  }, [wattingUserInfo, username, pathname])
}
