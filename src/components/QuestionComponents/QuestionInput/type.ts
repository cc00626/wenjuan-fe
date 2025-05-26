export interface QuestionInputPropsType {
  title?: string
  placeholder?: string
  onChange?: (newProps: QuestionInputPropsType) => void
}

export const QuestionInputProps = {
  title: '输入框标题',
  placeholder: '请输入...',
}
