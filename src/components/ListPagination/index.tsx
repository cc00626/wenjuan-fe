import React, {FC, useState} from 'react'
import {Pagination} from 'antd'
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom'
interface PropsType {
  total: number
}
const ListPagination: FC<PropsType> = (props: PropsType) => {
  const {total} = props
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [searchParams] = useSearchParams()
  const {pathname} = useLocation()
  const nav = useNavigate()
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
