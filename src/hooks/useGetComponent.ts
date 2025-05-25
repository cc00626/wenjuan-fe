import {useSelector} from 'react-redux'
import {StoreType} from '../store'
import {ComponentStateType} from '../store/component'
export default function useGetComponent() {
  const {componentList = [], selectId = ''} = useSelector<StoreType>(
    state => state.component
  ) as ComponentStateType //获取组件列表
  return {
    componentList,
    selectId,
  }
}
