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
  const addToCanvas = (item: ComponentConfigType) => {
    const {title, type, defaultProps} = item
    //找到组件的信息
    dispatch(addComponent({fe_id: nanoid(), title, type, props: defaultProps}))
  }

  //根据类型选择组件
  const GetComponent = (c: ComponentGroupType) => {
    const {componentConfig} = c
    return (
      <div>
        {componentConfig.map((item: ComponentConfigType) => {
          const {Component} = item
          return (
            <div
              key={item.type}
              className={style.component}
              onClick={() => {
                addToCanvas(item)
              }}
            >
              <div className={style.stopclick}>
                <Component />
              </div>
            </div>
          )
        })}
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
