import React, {FC} from 'react'
import style from '../common.module.scss'
import QuestionCard from '../../../components/QuestionCard'
import ListSearch from '../../../components/ListSearch'
import {useLoadQuestionList} from '../../../hooks/useLoadQuestionList'
import ListPagination from '../../../components/ListPagination'
import {Empty, Spin} from 'antd'
const Star: FC = () => {
  const {loading, data = {}} = useLoadQuestionList({isStar: true})
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
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {!loading &&
          list.length > 0 &&
          list.map((questionItem: any) => {
            return <QuestionCard key={questionItem._id} {...questionItem} />
          })}
      </div>
      <div className={style.footer}>
        {/* 分页 */}
        <ListPagination total={total} />
      </div>
    </>
  )
}
export default Star
