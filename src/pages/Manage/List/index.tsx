import React, {FC, useEffect, useRef, useState} from 'react'
import style from '../common.module.scss'
import QuestionCard from '../../../components/QuestionCard'
import ListSearch from '../../../components/ListSearch'
import {getQuestionList} from '../../../api/question'
import {Empty, Spin} from 'antd'
import {useDebounceFn, useRequest} from 'ahooks'
import {useSearchParams} from 'react-router-dom'
const List: FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [list = [], setList] = useState<any>() //列表数据
  const loadDataRef = useRef<HTMLDivElement>(null) //获取加载dom元素
  const isLoadMore = total >= list.length
  const [searchParams] = useSearchParams()
  const keyword = useSearchParams()[0].get('keyword') || ''

  //加载数据
  const {
    loading,
    error,
    run: loadData,
  } = useRequest(
    async () => {
      return await getQuestionList({page, pageSize: 10, keyword: keyword})
    },
    {
      manual: true,
      onSuccess: res => {
        const {list: newList, total} = res
        setList([...newList, ...list]) //添加到list中
        setPage(page + 1) //页码加1
        setTotal(total) //设置总数s
      },
    }
  )

  //为滚动事件添加防抖
  const {run} = useDebounceFn(
    () => {
      if (loadDataRef.current === null) return
      if (loadDataRef.current.getBoundingClientRect().bottom <= document.body.clientHeight) {
        if (!isLoadMore) return
        //还有数据,加载
        loadData()
        setIsStart(true)
      }
    },
    {wait: 1000}
  )
  useEffect(() => {
    setPage(1)
    setIsStart(false)
    setList([])
    setTotal(0)
  }, [keyword])

  //首次进入加载数据
  useEffect(() => {
    //设置滚动条顶部
    document.body.scrollTop = 0
    //加载数据
    loadData()
  }, [searchParams])

  //判断滚动到底部开始加载数据
  useEffect(() => {
    if (isLoadMore) {
      //监听滚动事件
      window.addEventListener('scroll', () => {
        run() //触发防抖
      })
    }
    return () => {
      //解除监听事件!!!!!!
      window.removeEventListener('scroll', () => {
        run()
      })
    }
  }, [searchParams, isLoadMore])

  const footerElement = () => {
    if (!isStart || loading) return <Spin />
    if (!isStart && list.length === 0) return <Empty description="暂无数据" />
    if (!loading && list.length > 0 && isLoadMore) return <div>加载更多 loading more...</div>
    if (!isLoadMore) return <div>没有更多数据了...</div>
  }
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
        {list.length > 0 &&
          list.map((questionItem: any) => {
            return <QuestionCard key={questionItem._id} {...questionItem} />
          })}
      </div>
      <div className={style.footer} ref={loadDataRef}>
        {footerElement()}
      </div>
    </>
  )
}
export default List
