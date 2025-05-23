import React, {FC} from 'react'
import {Outlet, useNavigate, useLocation} from 'react-router-dom'
import style from './index.module.scss'
import {Button, Flex, Divider, message} from 'antd'
import {PlusOutlined, UnorderedListOutlined, StarOutlined, DeleteOutlined} from '@ant-design/icons'
import {createQuestion} from '../../api/question'
import type {ResDataType} from '../../services/ajax'
import {useRequest} from 'ahooks'
const ManageLayout: FC = () => {
  const nav = useNavigate()
  const {pathname} = useLocation()

  //新建问卷
  const {run: handleCreateQuestion, loading} = useRequest(createQuestion, {
    manual: true,
    onSuccess: (data: ResDataType) => {
      nav(`/question/edit/${data.id}`)
      message.success('创建成功')
    },
  })
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Flex vertical={true} gap="small">
          <Button
            size="large"
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreateQuestion}
            disabled={loading}
          >
            新建问卷
          </Button>
          <Divider style={{borderTop: 'transparent'}} />
          <Button
            size="large"
            type={pathname === '/manage/list' ? 'default' : 'text'}
            icon={<UnorderedListOutlined />}
            onClick={() => {
              nav('/manage/list')
            }}
          >
            我的问卷
          </Button>
          <Button
            size="large"
            type={pathname === '/manage/star' ? 'default' : 'text'}
            icon={<StarOutlined />}
            onClick={() => {
              nav('/manage/star')
            }}
          >
            收藏问卷
          </Button>
          <Button
            size="large"
            type={pathname === '/manage/trash' ? 'default' : 'text'}
            icon={<DeleteOutlined />}
            onClick={() => {
              nav('/manage/trash')
            }}
          >
            回收站
          </Button>
        </Flex>
      </div>
      <div className={style.right}>
        <Outlet />
      </div>
    </div>
  )
}
export default ManageLayout
