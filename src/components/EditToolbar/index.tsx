import {DeleteOutlined, EyeOutlined, LockOutlined, UnlockOutlined} from '@ant-design/icons'
import {Button, Space, Tooltip} from 'antd'
import React, {FC} from 'react'
import {useDispatch} from 'react-redux'
import {changeHiddenFromComponent, deleteComponent, lockComponent} from '../../store/component'
import useGetComponent from '../../hooks/useGetComponent'
const EditToolbar: FC = () => {
  const dispatch = useDispatch()
  const {selectId, comopnentInfo} = useGetComponent()
  const {islock} = comopnentInfo || {}

  //删除功能
  const handleDelete = () => {
    dispatch(deleteComponent())
  }
  //显示隐藏功能
  const handleIshidden = () => {
    if (selectId) {
      dispatch(changeHiddenFromComponent({fe_id: selectId, ishidden: true}))
    }
  }
  //锁定,解锁
  const handleIslock = () => {
    if (selectId) {
      dispatch(lockComponent({fe_id: selectId}))
    }
  }
  return (
    <div>
      <Space>
        <Tooltip title="删除">
          <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
        </Tooltip>
        <Tooltip title="显示/隐藏">
          <Button shape="circle" icon={<EyeOutlined />} onClick={handleIshidden}></Button>
        </Tooltip>
        <Tooltip title="锁定/解锁">
          <Button
            shape="circle"
            icon={islock ? <UnlockOutlined /> : <LockOutlined />}
            type={islock ? 'primary' : 'default'}
            onClick={handleIslock}
          ></Button>
        </Tooltip>
      </Space>
    </div>
  )
}
export default EditToolbar
