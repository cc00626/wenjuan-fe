import React, {FC} from 'react'
import useGetComponent from '../../hooks/useGetComponent'
import {getComponentConfig} from '../QuestionComponents'
import {useDispatch} from 'react-redux'
import {changeFormToCanvas} from '../../store/component'
import {ComponentPropType} from '../QuestionComponents'
const ComponentProp: FC = () => {
  //从redux中获取所选中的组件
  const {comopnentInfo} = useGetComponent()
  const dispatch = useDispatch()

  //点击了空白处
  if (comopnentInfo == undefined) return <div>未选中组件</div>
  //根据组件类型获取组件的配置
  const {type, props, fe_id} = comopnentInfo
  const ComponentConfig = getComponentConfig(type)
  if (ComponentConfig == null) return <div>未找到组件配置</div>
  const {PropComponent} = ComponentConfig

  // 组件属性修改事件,统一添加到redux中
  const handleChange = (newProps: ComponentPropType) => {
    if (comopnentInfo == null) return
    dispatch(changeFormToCanvas({fe_id, newProps}))
  }

  return <PropComponent {...props} onChange={handleChange} />
}
export default ComponentProp
