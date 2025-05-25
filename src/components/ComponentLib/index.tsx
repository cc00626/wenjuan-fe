import React, {FC} from 'react'
import {ComponentConfigType, componentGroup, ComponentGroupType} from '../QuestionComponents'
import {Typography} from 'antd'
import style from './index.module.scss'
import {useDispatch} from 'react-redux'
import {addComponent} from '../../store/component'
import {nanoid} from 'nanoid'
const {Title} = Typography

const ComponentLib: FC = () => {
  const dispatch = useDispatch()
  const addToCanvas = (item: ComponentGroupType) => {
    const {componentConfig} = item
    //找到组件的信息
    componentConfig.map((item: ComponentConfigType) => {
      const {title, type, defaultProps} = item
      dispatch(addComponent({fe_id: nanoid(), title, type, props: defaultProps}))
    })
  }

  //根据类型选择组件
  const GetComponent = (c: ComponentGroupType) => {
    const {componentConfig} = c
    return (
      <div
        className={style.component}
        onClick={() => {
          addToCanvas(c)
        }}
      >
        <div className={style.stopclick}>
          {componentConfig.map((item: ComponentConfigType) => {
            const {Component} = item
            return <Component key={item.type} />
          })}
        </div>
      </div>
    )
  }
  //添加静态组件
  return (
    <div>
      {componentGroup.map((item: ComponentGroupType, index: number) => {
        return (
          <div key={item.groupId}>
            <Title level={3} className={style.title} style={index === 0 ? {marginTop: '0'} : {}}>
              {item.groupName}
            </Title>

            {GetComponent(item)}
          </div>
        )
      })}
    </div>
  )
}

export default ComponentLib
