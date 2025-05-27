import React, {FC} from 'react'
import {Radio, Space, Typography} from 'antd'
import {QuestionRadioPropsType, QuestionRadioProps, optionType} from './type'

const {Paragraph} = Typography
const QuestionRadio: FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
  const {title, isVertical, value, option = []} = {...QuestionRadioProps, ...props}
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'} wrap>
          {option.map((item: optionType) => {
            return (
              <Radio value={item.value} key={item.value}>
                {item.text}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </div>
  )
}
export default QuestionRadio
