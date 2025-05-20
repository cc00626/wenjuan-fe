import React, {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Result} from 'antd'
const NotFound: FC = () => {
  const nav = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉,您搜索的页面不存在"
      extra={
        <Button
          type="primary"
          onClick={() => {
            nav('/')
          }}
        >
          返回首页
        </Button>
      }
    />
  )
}

export default NotFound
