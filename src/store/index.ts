import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user'
import componentReducer from './component'
import {StateType} from './user'
import {ComponentStateType} from './component'
export type StoreType = {
  user: StateType
  component: ComponentStateType
}

export default configureStore<StoreType>({
  reducer: {
    //用户信息
    user: userReducer,
    //组件列表
    component: componentReducer,
  },
})
