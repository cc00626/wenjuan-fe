import React, {FC} from 'react'
import {QuestionInputProps, QuestionInputType} from './type'
import {Typography, Input} from 'antd'

const {Paragraph} = Typography
const QuestionInput: FC<QuestionInputType> = (props: QuestionInputType) => {
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
