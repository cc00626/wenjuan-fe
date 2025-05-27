import React, {FC} from 'react'
import {QuestionTextareaProps, QuestionTextareaPropsType} from './type'
import {Typography, Input} from 'antd'

const {Paragraph} = Typography
const {TextArea} = Input
const QuestionTextarea: FC<QuestionTextareaPropsType> = (props: QuestionTextareaPropsType) => {
  const {title = '', text = ''} = {...QuestionTextareaProps, ...props}
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea value={text} />
      </div>
    </div>
  )
}

export default QuestionTextarea
