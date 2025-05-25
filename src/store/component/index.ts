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
  selectId?: string
  componentList: ComponentInfoType[]
}
//初始化数据
const INIT_STATE: ComponentStateType = {selectId: '', componentList: []}

const createReducer = createSlice({
  name: 'component',
  initialState: INIT_STATE,
  reducers: {
    //重置所有的组件
    resetComponent: (state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
      return action.payload
    },
    //点击选中组件
    changeSelectId: (state: ComponentStateType, action: PayloadAction<string>) => {
      state.selectId = action.payload
      return state
    },
    //从组件库中添加组件到画布中
    addComponent: (state: ComponentStateType, action: PayloadAction<ComponentInfoType>) => {
      if (state.selectId === '') {
        //添加到最后一位
        state.componentList.push(action.payload)
      } else {
        //添加到选中组件的后面
        const index = state.componentList.findIndex(item => item.fe_id === state.selectId)
        state.componentList.splice(index + 1, 0, action.payload)
      }
      state.selectId = action.payload.fe_id
      return state
    },
  },
})

export const {resetComponent, changeSelectId, addComponent} = createReducer.actions
export default createReducer.reducer
