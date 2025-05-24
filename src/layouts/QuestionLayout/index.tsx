import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {useNavPage} from '../../hooks/useNavpage'
import userLoadUserInfo from '../../hooks/useLoadUsrInfo'
const QuestionLayout: FC = () => {
  const {wattingUserInfo} = userLoadUserInfo()
  useNavPage(wattingUserInfo)
  return (
    <div>
      <div>header</div>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
    </div>
  )
}
export default QuestionLayout
