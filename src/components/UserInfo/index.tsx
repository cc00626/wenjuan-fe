import React, {FC} from 'react'
import style from './index.module.scss'
import {Link, useNavigate} from 'react-router-dom'
import {UserSwitchOutlined} from '@ant-design/icons'
import useGetUserInfo from '../../hooks/useGetUserinfo'
import {message, Space} from 'antd'
import {removeToken} from '../../utils/token'
import {useDispatch} from 'react-redux'
import {logoutToReduce} from '../../store/user'
const UserInfo: FC = () => {
  const {username, nickname} = useGetUserInfo() //获取用户信息
  const dispatch = useDispatch()
  const nav = useNavigate()
  //退出登录
  const logout = () => {
    removeToken() //清除token
    dispatch(logoutToReduce())
    message.success('退出成功')
    nav('login')
  }

  //有用户信息,展示用户信息
  const hasUserInfo = (
    <div className={style.userInfo} style={{color: 'white'}}>
      <Space>
        <UserSwitchOutlined />
        {nickname}
        <Link to="/login" onClick={logout}>
          退出登录
        </Link>
      </Space>
    </div>
  )

  //没有用户信息,显示登录
  const noUserInfo = (
    <div className={style.userInfo}>
      <Link to="/login">登录</Link>
    </div>
  )
  return username ? hasUserInfo : noUserInfo
}

export default UserInfo
