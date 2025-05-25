import React, {FC, MouseEvent} from 'react'
import style from './index.module.scss'
import useGetComponent from '../../../../hooks/useGetComponent'
import {getComponentConfig} from '../../../../components/QuestionComponents'
import {changeSelectId, ComponentInfoType} from '../../../../store/component'
import {Spin} from 'antd'
import {useDispatch} from 'react-redux'
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
  const {componentList, selectId} = useGetComponent() //从redux中获取组件列表
  const dispatch = useDispatch()
  //点击组件,记录选择的id
  const handleSelectId = (e: MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation() //阻止冒泡
    //保存到redux中
    dispatch(changeSelectId(id))
  }
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
          <div
            className={style['canvas-item']}
            style={selectId === c.fe_id ? {border: '1.5px solid #1890ff'} : {}}
            key={c.fe_id}
            onClick={e => {
              handleSelectId(e, c.fe_id)
            }}
          >
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
