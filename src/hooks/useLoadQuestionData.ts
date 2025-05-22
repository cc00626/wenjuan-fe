import {useParams} from 'react-router-dom'
import {getQuestion} from '../api/question'
import {useRequest} from 'ahooks'
export function useLoadQuestionData() {
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState<ResDataType>({})
  // const {id = ''} = useParams()
  // useEffect(() => {
  //   async function getData() {
  //     const res: ResDataType = (await getQuestion(id)) || {}
  //     //保存数据
  //     setQuestionData(res)
  //     setLoading(false)
  //   }
  //   getData()
  // }, [])
  const {id = ''} = useParams()
  async function getData() {
    const res = await getQuestion(id)
    return res
  }
  const {loading, data} = useRequest(getData)

  return {
    loading,
    data,
  }
}
