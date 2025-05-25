import React, {FC} from 'react'
import style from './index.module.scss'
import QuestionTitle from '../../../../components/QuestionComponents/QuestionTitle/Component'
import QuestionInput from '../../../../components/QuestionComponents/QuestionInput/Component'
import useGetComponent from '../../../../hooks/useGetComponent'
import {getComponentConfig} from '../../../../components/QuestionComponents'
import {ComponentInfoType} from '../../../../store/component'
import {Spin} from 'antd'
type PropsType = {
  loading: boolean
}
//根据类型判断加载组件
const getComponent = (c: ComponentInfoType) => {
  const {type, props} = c
  //根据传入类型,获取组件的配置
  const ComponentConfig = getComponentConfig(type)
  if (!ComponentConfig) return
  const {Component} = ComponentConfig //获取组件
  return <Component {...props} />
}
const CanvasComponent: FC<PropsType> = (props: PropsType) => {
  const {loading} = props
  const {componentList} = useGetComponent() //从redux中获取组件列表
  if (loading)
    return (
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <Spin />
      </div>
    )
  return (
    <div className={style.canvas}>
      {componentList.map(c => {
        return (
          <div className={style['canvas-item']} key={c.fe_id}>
            <div className={style.component}>{getComponent(c)}</div>
          </div>
        )
      })}
      {/* <div className={style['canvas-item']}>
        <div className={style.component}>
          <QuestionInput />
        </div>
      </div> */}
    </div>
  )
}

export default CanvasComponent
