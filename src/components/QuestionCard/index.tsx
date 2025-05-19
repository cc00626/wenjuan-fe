import React, {FC} from 'react'
import style from './index.module.scss'
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
            <a href="#">{title}</a>
          </div>
          <div className={style.right}>
            <span>{isPublish ? '已发布' : '未发布'}</span>&nbsp;
            <span>答案:{answerCount}</span>&nbsp;
            <span>时间:{createdAt}</span>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.left}>
            <button>编辑问卷</button>
            <button>数据统计</button>
          </div>
          <div className={style.right}>
            <button>标星{isStar}</button>
            <button>复制</button>
            <button>删除</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default QuestionCard
