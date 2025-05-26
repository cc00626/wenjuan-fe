import Component from './Component' //导入组件
import PropComponent from './PropsComponent'
import {QuestionTitleProps} from './type'
export * from './type'

//标题组件
export default {
  title: '标题',
  type: 'questionTitle',
  Component,
  PropComponent,
  defaultProps: QuestionTitleProps,
}
