export interface optionType {
  value: string
  text: string
}

export interface QuestionRadioPropsType {
  title?: string
  isVertical?: false
  value?: string
  onChange?: (newProps: QuestionRadioPropsType) => void
  disable?: boolean
  option?: optionType[]
}
export const QuestionRadioProps: QuestionRadioPropsType = {
  title: '单选标题',
  isVertical: false,
  value: '',
  option: [
    {value: 'item1', text: '选项1'},
    {value: 'item2', text: '选项2'},
    {value: 'item3', text: '选项3'},
  ],
}
