import React, {ChangeEvent, FC, useState} from 'react'
import useGetComponent from '../../hooks/useGetComponent'
import {
  changeComponentTitle,
  changeHiddenFromComponent,
  changeSelectId,
  ComponentInfoType,
  lockComponent,
} from '../../store/component'
import style from './index.module.scss'
import {useDispatch} from 'react-redux'
import {Button, Input, message, Space} from 'antd'
import {EyeOutlined, LockOutlined, UnlockOutlined} from '@ant-design/icons'
const ComponentLayer: FC = () => {
  //获取组件信息,当前选中的id
  const {selectId, componentList} = useGetComponent()
  const [isUpdateTitle, setIsUpdateTitle] = useState('')
  const dispatch = useDispatch()
  //点击事件
  const hanldClick = (fe_id: string) => {
    const newComponent = componentList.find(item => {
      return item.fe_id === fe_id
    })
    if (!newComponent) return
    if (newComponent.ishidden) {
      //表示已经隐藏
      message.info('隐藏的组件不能显示')
      return
    }
    if (selectId !== fe_id) {
      //表示未选中组件
      dispatch(changeSelectId(fe_id))
      setIsUpdateTitle('')
      return
    }
    //已经选中组件
    setIsUpdateTitle(fe_id)
  }
  //修改标题
  const handleUpdateTitle = (e: ChangeEvent<HTMLInputElement>, fe_id: string) => {
    const value = e.target.value
    dispatch(changeComponentTitle({fe_id, title: value}))
  }

  //切换隐藏显示
  const handleIshidden = (fe_id: string, ishidden: boolean) => {
    dispatch(changeHiddenFromComponent({fe_id, ishidden}))
  }
  //锁定,解锁
  const handleIslock = (fe_id: string) => {
    dispatch(lockComponent({fe_id}))
  }

  return (
    <div>
      {componentList.map((item: ComponentInfoType) => {
        const {fe_id, title, islock, ishidden} = item
        return (
          <div key={fe_id} className={style.container}>
            <div
              className={style.left}
              style={{...(fe_id === selectId ? {color: '#1890ff'} : {})}}
              onClick={() => {
                hanldClick(fe_id)
              }}
            >
              {isUpdateTitle === fe_id ? (
                <Input
                  value={title}
                  onChange={e => handleUpdateTitle(e, fe_id)}
                  onBlur={() => {
                    setIsUpdateTitle('')
                  }}
                  onPressEnter={() => {
                    setIsUpdateTitle('')
                  }}
                />
              ) : (
                <span>{title}</span>
              )}
            </div>
            <div className={style.right}>
              <Space>
                <Button
                  shape="circle"
                  icon={<EyeOutlined />}
                  onClick={() => handleIshidden(fe_id, !ishidden)}
                  type={ishidden ? 'primary' : 'default'}
                ></Button>
                <Button
                  shape="circle"
                  icon={islock ? <UnlockOutlined /> : <LockOutlined />}
                  type={islock ? 'primary' : 'default'}
                  onClick={() => handleIslock(fe_id)}
                ></Button>
              </Space>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ComponentLayer
