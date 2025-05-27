import Component from './Component'
import PropComponent from './PropsComponent'
import {QuestionCheckboxProps} from './type'
export * from './type'
export default {
  title: '多行输入框',
  type: 'questionCheckbox',
  Component,
  PropComponent,
  defaultProps: QuestionCheckboxProps,
}
