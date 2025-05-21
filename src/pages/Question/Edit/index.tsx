import React, {useEffect} from 'react'
import {getQuestion} from '../../../api/question'
const Edit: React.FC = () => {
  useEffect(() => {
    async function getData() {
      const res = await getQuestion('1')
      console.log(res)
    }
    getData()
  }, [])
  return <div>编辑</div>
}
export default Edit
