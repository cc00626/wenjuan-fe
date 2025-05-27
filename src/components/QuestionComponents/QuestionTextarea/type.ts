export interface QuestionTextareaPropsType {
  title?: string
  text?: string
  onChange?: (newProps: QuestionTextareaPropsType) => void
  disable?: boolean
}

export const QuestionTextareaProps = {
  title: '多行输入框',
  text: '请输入...',
}
