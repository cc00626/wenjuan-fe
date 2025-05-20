import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {Input} from 'antd'
import {useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import {LIST_SEARCH_KEY} from '../../constant'
const {Search} = Input
const ListSearch: FC = () => {
  const [value, setValue] = useState<string>('')
  const nav = useNavigate()
  const {pathname} = useLocation()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    //searchParams变化的时候从url获取参数
    const curValue = searchParams.get(LIST_SEARCH_KEY) || ''
    setValue(curValue)
  }, [searchParams])
  //搜索框改变事件
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    //收集搜索值
    setValue(event.target.value)
  }
  //进行搜索
  const handleSearch = (value: string) => {
    //设置改变url
    nav({
      pathname,
      search: `${LIST_SEARCH_KEY}=${value}`,
    })
  }
  return (
    <Search
      style={{width: '260px'}}
      placeholder="请输入关键字"
      allowClear
      value={value}
      onChange={handleSearchChange}
      onSearch={handleSearch}
    />
  )
}

export default ListSearch
