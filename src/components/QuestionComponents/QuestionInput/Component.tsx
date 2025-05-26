import React, {FC} from 'react'
import {QuestionInputProps, QuestionInputPropsType} from './type'
import {Typography, Input} from 'antd'

const {Paragraph} = Typography
const QuestionInput: FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const {title = '', placeholder = '请输入'} = {...QuestionInputProps, ...props}
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder} />
      </div>
    </div>
  )
}

export default QuestionInput
