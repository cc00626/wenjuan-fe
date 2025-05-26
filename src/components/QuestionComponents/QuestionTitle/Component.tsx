import React, {FC} from 'react'
import {Typography} from 'antd'
import {QuestionTitleProps, QuestionTitlePropsType} from './type'

const {Title} = Typography
//标题
const QuestionTitle: FC<QuestionTitlePropsType> = (props: QuestionTitlePropsType) => {
  const {text = '123123', level = 1, isCenter = false} = {...QuestionTitleProps, ...props}
  return (
    <div>
      <Title level={level} style={{textAlign: isCenter ? 'center' : 'start', margin: '0'}}>
        {text}
      </Title>
    </div>
  )
}
export default QuestionTitle
