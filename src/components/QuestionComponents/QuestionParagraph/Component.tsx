import React, {FC} from 'react'
import {Typography} from 'antd'
import {QuestionParagraphProps, QuestionParagraphPropsType} from './type'
const {Paragraph} = Typography
const QuestionParagraph: FC<QuestionParagraphPropsType> = (props: QuestionParagraphPropsType) => {
  const {text, isCenter} = {...QuestionParagraphProps, ...props}
  const t = text.split('\n')
  return (
    <div>
      <Paragraph style={{textAlign: isCenter ? 'center' : 'left'}}>
        {t.map((item: string, index: number) => {
          return index > 0 ? (
            <div key={index}>
              <span>{item}</span>
            </div>
          ) : (
            <span>{item}</span>
          )
        })}
      </Paragraph>
    </div>
  )
}
export default QuestionParagraph
