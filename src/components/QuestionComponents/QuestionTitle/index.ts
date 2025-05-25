import Component from './Component' //导入组件
import {QuestionTitleProps} from './type'
export * from './type'

export default {
  title: '标题',
  type: 'questionTitle',
  Component,
  defaultProps: QuestionTitleProps,
}
