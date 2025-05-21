import axios, {ResType} from '../services/ajax'

//获取问卷详情信息
export async function getQuestion(id: string) {
  const res: ResType = await axios.get(`/api/question/${id}`)
  return res.data
}
