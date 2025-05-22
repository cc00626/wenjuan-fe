import React, {FC} from 'react'
import style from './index.module.scss'
import {Divider, Button, Space, Tag} from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  StarFilled,
} from '@ant-design/icons'
interface PropsType {
  _id: string
  title: string
  isPublish: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
}
const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const {title, isPublish, isStar, answerCount, createdAt} = props
  return (
    <>
      <div className={style.questionContainer}>
        <div className={style.top}>
          <div className={style.left}>
            <Space size="small">
              {isStar ? <StarFilled style={{color: '#1677ff'}} /> : <></>}
              <a href="#">{title}</a>
            </Space>
          </div>
          <div className={style.right}>
            <Space size="small">
              {isPublish ? <Tag color="blue">已发布</Tag> : <Tag>未发布</Tag>}
              <span>答案:{answerCount}</span>&nbsp;
              <span>时间:{createdAt}</span>
            </Space>
          </div>
        </div>
        <Divider />
        <div className={style.bottom}>
          <div className={style.left}>
            <Space size="small">
              <Button type="text" size="small" icon={<EditOutlined />}>
                编辑问卷
              </Button>
              <Button type="text" size="small" icon={<LineChartOutlined />} disabled={!isPublish}>
                数据统计
              </Button>
            </Space>
          </div>
          <div className={style.right}>
            <Space size="small">
              <Button type="text" size="small" icon={<StarOutlined />}>
                {isStar ? '取消收藏' : '收藏'}
              </Button>
              <Button type="text" size="small" icon={<CopyOutlined />}>
                复制
              </Button>
              <Button type="text" size="small" icon={<DeleteOutlined />}>
                删除
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  )
}
export default QuestionCard
