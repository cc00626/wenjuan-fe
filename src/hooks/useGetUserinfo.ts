import {useSelector} from 'react-redux'
import {StoreType} from '../store/index'
import {StateType} from '../store/user'
/**
 *从redux中获取用户信息
 *
 */

function useGetUserInfo() {
  const {username, nickname} = useSelector<StoreType>(state => state.user) as StateType //获取用户信息
  return {username, nickname}
}

export default useGetUserInfo
