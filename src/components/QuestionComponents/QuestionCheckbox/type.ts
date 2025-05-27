export interface listType {
  value: string
  text: string
  checked?: boolean
}

export interface QuestionCheckboxPropsType {
  title?: string
  isVertical?: boolean
  list?: listType[]
  onChange?: (newProps: QuestionCheckboxPropsType) => void
  disable?: boolean
}
export const QuestionCheckboxProps: QuestionCheckboxPropsType = {
  title: '多选标题',
  isVertical: false,
  list: [
    {value: 'item1', text: '选项1', checked: false},
    {value: 'item2', text: '选项2', checked: false},
    {value: 'item3', text: '选项3', checked: false},
  ],
}
