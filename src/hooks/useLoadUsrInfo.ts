import {useEffect, useState} from 'react'
import useGetUserInfo from './useGetUserinfo'
import {getUserInfo} from '../api/user'
import {useRequest} from 'ahooks'
import {setUserInfoToReduce} from '../store/user'
import {StateType} from '../store/user'
import {useDispatch} from 'react-redux'
//获取用户信息
export default function userLoadUserInfo() {
  const [wattingUserInfo, setWattingUserInfo] = useState(true) //是否请求用户信息
  const dispatch = useDispatch()
  const {run} = useRequest(getUserInfo, {
    manual: true,
    onSuccess: res => {
      //表示请求成功,将数据存储到redux中
      dispatch(setUserInfoToReduce(res as StateType))
    },
    onFinally: () => {
      setWattingUserInfo(false)
    },
  })

  //判断用户信息是否存在,存在则不请求,不存在请求
  const {username} = useGetUserInfo()
  useEffect(() => {
    if (username) {
      //表示用户信息已经存在
      setWattingUserInfo(false)
      return
    }
    //用户信息不存在
    run()
  }, [username])

  return {wattingUserInfo}
}
