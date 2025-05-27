export interface QuestionParagraphPropsType {
  text?: string
  isCenter?: boolean
  onChange?: (newProps: QuestionParagraphPropsType) => void
  disable?: boolean
}

export const QuestionParagraphProps = {
  text: '输入框标题',
  isCenter: false,
}
