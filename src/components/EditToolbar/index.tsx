import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  EyeOutlined,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons'
import {Button, Space, Tooltip} from 'antd'
import React, {FC} from 'react'
import {useDispatch} from 'react-redux'
import {
  changeHiddenFromComponent,
  copyComponentToRedux,
  deleteComponent,
  lockComponent,
  pasteComponent,
} from '../../store/component'
import useGetComponent from '../../hooks/useGetComponent'
const EditToolbar: FC = () => {
  const dispatch = useDispatch()
  const {selectId, comopnentInfo, copyComponent} = useGetComponent()
  const {islock} = comopnentInfo || {}

  //删除功能
  const handleDelete = () => {
    if (selectId) {
      dispatch(deleteComponent({fe_id: selectId}))
    }
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

  //复制
  const handleCopy = () => {
    if (selectId) {
      dispatch(copyComponentToRedux({fe_id: selectId}))
    }
  }

  //粘贴
  const handlePaste = () => {
    if (selectId) {
      dispatch(pasteComponent())
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
        <Tooltip title="复制">
          <Button shape="circle" icon={<CopyOutlined />} onClick={handleCopy}></Button>
        </Tooltip>
        <Tooltip title="粘贴">
          <Button
            shape="circle"
            icon={<BlockOutlined />}
            onClick={handlePaste}
            disabled={copyComponent == null}
          ></Button>
        </Tooltip>
      </Space>
    </div>
  )
}
export default EditToolbar
