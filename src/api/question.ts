import axios, {ResDataType} from '../services/ajax'

//获取问卷详情信息
export async function getQuestion(id: string): Promise<ResDataType> {
  const data = await axios.get(`/api/question/${id}`)
  return data
}

//新建问卷
export async function createQuestion(): Promise<ResDataType> {
  const data = await axios.post('/api/question')
  return data
}

//获取问卷列表
export type SearchOption = {
  keyword: string
  isStar: boolean
  isDelete: boolean
  page: number
  pageSize: number
}
export async function getQuestionList(opt: Partial<SearchOption>): Promise<ResDataType> {
  const data = await axios.get('/api/question', {params: opt})
  return data
}

//更新问卷
export async function updateQuestion(id: string, opt: any): Promise<ResDataType> {
  const data = await axios.patch(`/api/question/${id}`, opt)
  return data
}

//复制问卷
export async function copyQuestion(id: string): Promise<ResDataType> {
  const data = await axios.post(`/api/question/duplicate/${id}`)
  return data
}
