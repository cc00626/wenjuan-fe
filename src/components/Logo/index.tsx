import React, {FC} from 'react'
import style from './index.module.scss'
import {Layout, Typography} from 'antd'
import {EditOutlined} from '@ant-design/icons'
const {Title} = Typography
const Logo: FC = () => {
  return (
    <Typography className={style.logo}>
      <Title>
        <EditOutlined />
        标星问卷
      </Title>
    </Typography>
  )
}
export default Logo
