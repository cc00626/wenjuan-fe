import {useParams} from 'react-router-dom'
import {getQuestion} from '../api/question'
import {useRequest} from 'ahooks'
import {useEffect} from 'react'
import {useDispatch, UseDispatch} from 'react-redux'
import {resetComponent} from '../store/component'
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
  /*   
  
  
  const {id = ''} = useParams()
  async function getData() {
    const res = await getQuestion(id)
    return res
  }
  const {loading, data} = useRequest(getData)
  return {
    loading,
    data,
  } */

  const {id = ''} = useParams() //获取id
  const dispatch = useDispatch()
  const {loading, error, run, data} = useRequest(
    async (id: string) => {
      if (!id) throw new Error('id不能为空')
      const data = await getQuestion(id) //请求数据
      return data
    },
    {
      manual: true,
      onSuccess: res => {
        console.log(res)
      },
    }
  )

  //监听data的变化 存储列表数据到redux中
  useEffect(() => {
    if (!data) return
    const {componentList = []} = data
    dispatch(resetComponent({componentList}))
  }, [data])

  //监听id加载数据
  useEffect(() => {
    run(id) //加载数据
  }, [id])

  return {
    loading,
    error,
  }
}
