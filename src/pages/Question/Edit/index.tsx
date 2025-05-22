import React, {FC} from 'react'
import {useLoadQuestionData} from '../../../hooks/useLoadQuestionData'
const Edit: FC = () => {
  const {loading, data = {}} = useLoadQuestionData()
  return loading ? <div>loading...</div> : <div>{data.title}</div>
}
export default Edit
