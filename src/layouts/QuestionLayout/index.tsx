import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {useNavPage} from '../../hooks/useNavpage'
import userLoadUserInfo from '../../hooks/useLoadUsrInfo'
import {Spin} from 'antd'
import style from './index.module.scss'
const QuestionLayout: FC = () => {
  const {wattingUserInfo} = userLoadUserInfo()
  useNavPage(wattingUserInfo)
  return (
    <div style={{height: '100vh'}}>
      {wattingUserInfo ? (
        <div className={style.loading}>
          <Spin />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}
export default QuestionLayout
