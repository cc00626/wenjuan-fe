import React, {FC, useEffect, useState} from 'react'
import {Pagination} from 'antd'
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom'
interface PropsType {
  total: number
}
const ListPagination: FC<PropsType> = (props: PropsType) => {
  const {total} = props
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchParams] = useSearchParams()
  const {pathname} = useLocation()
  const nav = useNavigate()
  useEffect(() => {
    const curPage = Number(searchParams.get('page')) || 1
    const curPageSize = Number(searchParams.get('pageSize')) || 10
    setPage(curPage)
    setPageSize(curPageSize)
  }, [searchParams])
  //页面发生变化的时候
  const handleChange = (page: number, pageSize: number) => {
    setPage(page)
    setPageSize(pageSize)
    //改变url
    searchParams.set('page', page.toString())
    searchParams.set('pageSize', pageSize.toString())
    nav({
      pathname,
      search: searchParams.toString(),
    })
  }

  return <Pagination current={page} pageSize={pageSize} total={total} onChange={handleChange} />
}
export default ListPagination
