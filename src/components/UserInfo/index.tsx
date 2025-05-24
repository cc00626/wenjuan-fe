import React, {FC} from 'react'
import style from './index.module.scss'
import {Link} from 'react-router-dom'
const UserInfo: FC = () => {
  return (
    <div className={style.userInfo}>
      <Link to="/login">登录</Link>
    </div>
  )
}

export default UserInfo
