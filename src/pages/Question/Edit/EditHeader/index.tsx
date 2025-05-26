import React, {FC} from 'react'
import style from './index.module.scss'
import {Button, Space, Typography} from 'antd'
import {LeftOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
import EditToolbar from '../../../../components/EditToolbar'
const {Title} = Typography
const EditHeader: FC = () => {
  const nav = useNavigate()
  return (
    <div className={style['edit-header']}>
      <div className={style.left}>
        <Space>
          <Button
            type="link"
            icon={<LeftOutlined />}
            onClick={() => {
              nav(-1)
            }}
          >
            返回
          </Button>
          <Title level={5} style={{margin: '0', fontWeight: 'normal'}}>
            组件标题
          </Title>
        </Space>
      </div>
      <div className={style.center}>
        <EditToolbar />
      </div>
      <div className={style.right}>
        <Space>
          <Button>保存</Button>
          <Button type="primary">发布</Button>
        </Space>
      </div>
    </div>
  )
}

export default EditHeader
