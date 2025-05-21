import React, {FC, useEffect} from 'react'
import style from './index.module.scss'
import {Typography, Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const {Title, Paragraph} = Typography
const Home: FC = () => {
  const nav = useNavigate()
  useEffect(() => {
    axios.get('/api/question').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div className={style.home}>
      <div className={style.container}>
        <Title>标星问卷</Title>
        <Paragraph>已发布问卷324分,答卷324,在线使用人数超过19999999999</Paragraph>
        <Button
          size="large"
          type="primary"
          style={{borderRadius: '0px'}}
          onClick={() => {
            nav('/manage/list')
          }}
        >
          开始使用
        </Button>
      </div>
    </div>
  )
}

export default Home
