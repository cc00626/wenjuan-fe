import {FC} from 'react'
import QuestionInputConfig, {QuestionInputType} from './QuestionInput/index'
import QuestionTitleConfig, {QuestionTitleType} from './QuestionTitle/index'

//组件的props类型
export type ComponentPropType = QuestionInputType & QuestionTitleType

//组件的配置类型
export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentPropType>
  defaultProps: ComponentPropType
}

//全局组件的配置列表
export const componentConfigList: ComponentConfigType[] = [QuestionTitleConfig, QuestionInputConfig]

//获取组建的配置函数
export function getComponentConfig(type: string) {
  return componentConfigList.find(c => c.type === type)
}
