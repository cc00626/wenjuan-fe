import React, {FC} from 'react'
import useGetComponent from '../../hooks/useGetComponent'
import {ComponentConfigType, getComponentConfig} from '../QuestionComponents'
const ComponentProp: FC = () => {
  //从redux中获取所选中的组件
  const {comopnentInfo} = useGetComponent()

  //点击了空白处
  if (comopnentInfo == undefined) return <div>未选中组件</div>
  //根据组件类型获取组件的配置
  const {type} = comopnentInfo
  const ComponentConfig = getComponentConfig(type)
  console.log(ComponentConfig)
  if (ComponentConfig == null) return <div>未找到组件配置</div>
  const {PropComponent} = ComponentConfig

  return <PropComponent />
}
export default ComponentProp
