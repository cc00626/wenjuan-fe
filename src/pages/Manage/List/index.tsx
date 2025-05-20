import React, {FC} from 'react'
import style from '../common.module.scss'
import QuestionCard from '../../../components/QuestionCard'
const rawQuestionList = [
  {
    _id: '01',
    title: '问卷01',
    isPublish: true,
    isStar: true,
    answerCount: 10,
    createdAt: '2021-01-01',
  },
  {
    _id: '02',
    title: '问卷02',
    isPublish: false,
    isStar: false,
    answerCount: 14,
    createdAt: '2021-01-01',
  },
  {
    _id: '03',
    title: '问卷03',
    isPublish: true,
    isStar: true,
    answerCount: 10,
    createdAt: '2021-01-01',
  },
  {
    _id: '04',
    title: '问卷04',
    isPublish: true,
    isStar: true,
    answerCount: 10,
    createdAt: '2021-01-01',
  },
  {
    _id: '05',
    title: '问卷05',
    isPublish: false,
    isStar: false,
    answerCount: 10,
    createdAt: '2021-01-01',
  },
]
const List: FC = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={style.right}>
          <p>搜索</p>
        </div>
      </div>
      <div className={style.center}>
        {rawQuestionList.map(questionItem => {
          return <QuestionCard key={questionItem._id} {...questionItem} />
        })}
      </div>
      <div className={style.footer}>loading more</div>
    </>
  )
}
export default List
