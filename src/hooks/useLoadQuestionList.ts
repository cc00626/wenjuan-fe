import {useRequest} from 'ahooks'
import {getQuestionList} from '../api/question'
import {useSearchParams} from 'react-router-dom'
import {LIST_SEARCH_KEY} from '../constant'
interface optType {
  keyword: string
  isStar: boolean
  isDelete: boolean
  page: number
  pageSize: number
}
export function useLoadQuestionList(opt: Partial<optType>) {
  const {isStar, isDelete} = opt
  const [searchParams] = useSearchParams()
  //获取搜索关键字
  const keyword: string = searchParams.get(LIST_SEARCH_KEY) || ''
  //获取页数
  const page: number = parseInt(searchParams.get('page') || '') || 1
  //获取每页的条数
  const pageSize: number = parseInt(searchParams.get('pageSize') || '') || 10
  async function getData() {
    const data = await getQuestionList({keyword, isStar, isDelete, page, pageSize})
    return data
  }

  const {loading, data, error} = useRequest(getData, {
    refreshDeps: [keyword, page, pageSize], //依赖更新
  })
  return {loading, data, error}
}
