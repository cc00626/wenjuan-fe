import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ComponentPropType} from '../../components/QuestionComponents'
//组件信息的类型
export type ComponentInfoType = {
  fe_id: string
  title: string
  type: string
  props: ComponentPropType
}
//数据类型
export type ComponentStateType = {
  componentList: ComponentInfoType[]
}
//初始化数据
const INIT_STATE: ComponentStateType = {
  componentList: [],
}

const createReducer = createSlice({
  name: 'component',
  initialState: INIT_STATE,
  reducers: {
    //重置所有的组件
    resetComponent: (state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
      return action.payload
    },
  },
})

export const {resetComponent} = createReducer.actions
export default createReducer.reducer
