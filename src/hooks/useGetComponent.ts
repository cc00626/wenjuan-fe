import {useSelector} from 'react-redux'
import {StoreType} from '../store'
import {ComponentStateType} from '../store/component'
export default function useGetComponent() {
  const {componentList = [], selectId} = useSelector<StoreType>(
    state => state.component
  ) as ComponentStateType //获取组件列表和选中组件id

  //根据选中组件id 获取当前的组件

  const comopnentInfo = componentList.find(item => {
    return item.fe_id === selectId
  })

  return {
    componentList,
    selectId,
    comopnentInfo,
  }
}
