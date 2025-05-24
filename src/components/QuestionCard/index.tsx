import React, {FC, useState} from 'react'
import style from './index.module.scss'
import {Divider, Button, Space, Tag, message, Popconfirm, Modal} from 'antd'
import {updateQuestion, copyQuestion} from '../../api/question'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  StarFilled,
} from '@ant-design/icons'
import {useRequest} from 'ahooks'
interface PropsType {
  _id: string
  title: string
  isPublish: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
}
const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const {_id, title, isPublish, isStar, answerCount, createdAt} = props
  const [isStarState, setIsStarState] = useState(isStar)
  const [isDeleteState, setIsDeleteState] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  //收藏问卷
  const {run: starQuestion} = useRequest(
    async () => {
      const data = await updateQuestion(_id, {isStar: !isStarState})
      return data
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess: () => {
        message.success(isStarState ? '取消收藏成功' : '收藏成功')
        setIsStarState(!isStarState)
      },
    }
  )

  //复制问卷
  const {run: confirmCopy} = useRequest(
    async () => {
      const res = await copyQuestion(_id)
      return res
    },
    {
      manual: true,
      onSuccess: res => {
        console.log(res)
        message.success('复制成功')
      },
    }
  )

  //显示弹框
  const showModal = () => {
    setIsShowModal(true)
  }
  //关闭弹框
  const handleCancel = () => {
    setIsShowModal(false)
  }

  //确认弹框,进行假删除
  const {run: handleDelete} = useRequest(
    async () => {
      await updateQuestion(_id, {isDelete: true})
    },
    {
      manual: true,
      onSuccess: res => {
        setIsShowModal(false)
        setIsDeleteState(true)
        message.success('删除成功')
        console.log(res)
      },
    }
  )

  if (isDeleteState) return null
  return (
    <>
      <div className={style.questionContainer}>
        <div className={style.top}>
          <div className={style.left}>
            <Space size="small">
              {isStarState ? <StarFilled style={{color: '#1677ff'}} /> : <></>}
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
              <Button type="text" size="small" icon={<StarOutlined />} onClick={starQuestion}>
                {isStarState ? '取消收藏' : '收藏'}
              </Button>
              <Popconfirm
                title="你确定要复制吗"
                okText="确定"
                cancelText="取消"
                onConfirm={confirmCopy}
              >
                <Button type="text" size="small" icon={<CopyOutlined />}>
                  复制
                </Button>
              </Popconfirm>
              <Button type="text" size="small" icon={<DeleteOutlined />} onClick={showModal}>
                删除
              </Button>
              <Modal
                title="你确定要删除吗"
                okText="确定"
                cancelText="取消"
                open={isShowModal}
                onCancel={handleCancel}
                onOk={handleDelete}
              ></Modal>
            </Space>
          </div>
        </div>
      </div>
    </>
  )
}
export default QuestionCard
