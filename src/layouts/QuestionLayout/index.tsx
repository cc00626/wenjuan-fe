import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
const QuestionLayout: FC = () => {
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
