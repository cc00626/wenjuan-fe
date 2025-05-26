import Component from './Component' //导入组件
import PropComponent from './PropsComponent'
import {QuestionInputProps} from './type'
export * from './type'

//输入框组件的配置
export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QuestionInputProps,
}
