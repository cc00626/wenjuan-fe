import Component from './Component' //导入组件
import PropComponent from './PropsComponent'
import {QuestionTextareaProps} from './type'
export * from './type'

//输入框组件的配置
export default {
  title: '多行输入框',
  type: 'questionTextarea',
  Component,
  PropComponent,
  defaultProps: QuestionTextareaProps,
}
