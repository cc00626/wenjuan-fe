import {FC} from 'react'
import QuestionInputConfig, {QuestionInputPropsType} from './QuestionInput/index'
import QuestionTitleConfig, {QuestionTitlePropsType} from './QuestionTitle/index'
import QuestionParagraphConfig, {QuestionParagraphPropsType} from './QuestionParagraph/index'

//组件的props类型
export type ComponentPropType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType

//组件的配置类型
export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentPropType>
  PropComponent: FC<ComponentPropType>
  defaultProps: ComponentPropType
}

//全局组件的配置列表
export const componentConfigList: ComponentConfigType[] = [
  QuestionTitleConfig,
  QuestionInputConfig,
  QuestionParagraphConfig,
]

//组件库中的分组
export type ComponentGroupType = {
  groupId: string
  groupName: string
  componentConfig: ComponentConfigType[]
}
export const componentGroup: ComponentGroupType[] = [
  {
    groupId: 'text',
    groupName: '文本显示',
    componentConfig: [QuestionTitleConfig, QuestionParagraphConfig],
  },
  {groupId: 'input', groupName: '用户输入', componentConfig: [QuestionInputConfig]},
]

//获取组建的配置函数
export function getComponentConfig(type: string) {
  return componentConfigList.find(c => c.type === type)
}
