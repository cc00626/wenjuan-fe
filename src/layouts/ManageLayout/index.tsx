import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import style from './index.module.scss'
const ManageLayout: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <p>ManageLeft</p>
        <a href="">我的问卷</a>
        <a href="">标星问卷</a>
        <a href="">回收站</a>
      </div>
      <div className={style.right}>
        <Outlet />
      </div>
    </div>
  )
}
export default ManageLayout
