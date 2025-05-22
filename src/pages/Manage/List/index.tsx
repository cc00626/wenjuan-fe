import React, {FC} from 'react'
import style from '../common.module.scss'
import QuestionCard from '../../../components/QuestionCard'
import ListSearch from '../../../components/ListSearch'
import {useLoadQuestionList} from '../../../hooks/useLoadQuestionList'
import {Spin} from 'antd'
const List: FC = () => {
  const {loading, data = {}} = useLoadQuestionList({})
  const {list = [], total = 0} = data
  return (
    <>
      <div className={style.header}>
        <div className={style.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={style.right}>
          <ListSearch />
        </div>
      </div>
      <div className={style.center}>
        {loading && (
          <div className={style.loading}>
            <Spin />
          </div>
        )}
        {!loading &&
          list.length > 0 &&
          list.map((questionItem: any) => {
            return <QuestionCard key={questionItem._id} {...questionItem} />
          })}
      </div>
      <div className={style.footer}>loading more</div>
    </>
  )
}
export default List
