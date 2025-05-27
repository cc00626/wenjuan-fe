import React, {FC} from 'react'
import {Checkbox, Space, Typography} from 'antd'
import {QuestionCheckboxPropsType, QuestionCheckboxProps} from './type'

const {Paragraph} = Typography
const QuestionCheckbox: FC<QuestionCheckboxPropsType> = (props: QuestionCheckboxPropsType) => {
  const {title, isVertical, list = []} = {...QuestionCheckboxProps, ...props}
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? 'vertical' : 'horizontal'}>
        {list.map((item, index) => (
          <Checkbox key={index} checked={item.checked}>
            {item.text}
          </Checkbox>
        ))}
      </Space>
    </div>
  )
}

export default QuestionCheckbox
