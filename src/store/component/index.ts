import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ComponentPropType} from '../../components/QuestionComponents'
import {getSelectId, addComponentToCanvas} from './utils'
import cloneDeep from 'lodash.clonedeep'
import {nanoid} from 'nanoid'
//组件信息的类型
export type ComponentInfoType = {
  fe_id: string
  title: string
  ishidden?: boolean | false
  islock?: boolean
  type: string
  props: ComponentPropType
}

//数据类型
export type ComponentStateType = {
  selectId?: string
  componentList: ComponentInfoType[]
  copyComponent?: ComponentInfoType | null
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
      // if (state.selectId === '') {
      //   //添加到最后一位
      //   state.componentList.push(action.payload)
      // } else {
      //   //添加到选中组件的后面
      //   const index = state.componentList.findIndex(item => item.fe_id === state.selectId)
      //   state.componentList.splice(index + 1, 0, action.payload)
      // }
      // state.selectId = action.payload.fe_id
      addComponentToCanvas(state, action.payload)
      return state
    },
    //修改右侧表单内容自动添加到画布上
    changeFormToCanvas: (
      state: ComponentStateType,
      actions: PayloadAction<{fe_id: string; newProps: ComponentPropType}>
    ) => {
      const {fe_id, newProps} = actions.payload
      //当前点击的组件
      const currentComponent = state.componentList.find(item => item.fe_id === fe_id)
      if (currentComponent) {
        currentComponent.props = newProps
      }
      return state
    },
    //删除组件
    deleteComponent: (state: ComponentStateType, action: PayloadAction<{fe_id: string}>) => {
      const {componentList} = state
      //根据删除的元素重新设置selectId
      //删除当前选中的组件
      // const newComponentList = componentList.filter(c => !c.ishidden)
      state.selectId = getSelectId(action.payload.fe_id, componentList)
      const index = componentList.findIndex(item => item.fe_id === action.payload.fe_id)
      componentList.splice(index, 1)
      return state
    },
    //显示,隐藏组件
    changeHiddenFromComponent: (
      state: ComponentStateType,
      action: PayloadAction<{fe_id: string; ishidden: boolean}>
    ) => {
      const {componentList} = state
      const {fe_id, ishidden} = action.payload
      //获取当前选中的组件
      //获取index
      const newComponent = componentList.find(item => item.fe_id === fe_id)
      if (ishidden) {
        //表示要进行隐藏,选中下一个
        const newSelectId = getSelectId(fe_id, componentList)
        state.selectId = newSelectId
      } else {
        //表示要显示,选中当前组件
        state.selectId = fe_id
      }
      //修改当前选中的ishidden属性
      if (newComponent) {
        newComponent.ishidden = ishidden
      }
      return state
    },
    //锁定,解锁
    lockComponent: (state: ComponentStateType, action: PayloadAction<{fe_id: string}>) => {
      const currComp = state.componentList.find(c => c.fe_id === action.payload.fe_id)
      if (currComp) {
        currComp.islock = !currComp.islock
      }
      return state
    },
    //复制
    copyComponentToRedux: (state: ComponentStateType, action: PayloadAction<{fe_id: string}>) => {
      //获取当前组件
      const currComp = state.componentList.find(c => c.fe_id === action.payload.fe_id)
      //将组件添加到copyComponent中,设置新的fe_id
      state.copyComponent = cloneDeep(currComp) as ComponentInfoType
      return state
    },
    //粘贴
    pasteComponent: (state: ComponentStateType) => {
      //获取copyComponent 添加到画布中
      if (state.copyComponent) {
        //每次粘贴,生成新的id
        const newCopyComponent = cloneDeep({...state.copyComponent, fe_id: nanoid()})
        addComponentToCanvas(state, newCopyComponent)
      }
    },
    //修改组件的标题
    changeComponentTitle: (
      state: ComponentStateType,
      action: PayloadAction<{fe_id: string; title: string}>
    ) => {
      const current = state.componentList.find(item => {
        return item.fe_id === action.payload.fe_id
      })
      if (current) {
        current.title = action.payload.title
      }
    },
  },
})

export const {
  resetComponent,
  changeSelectId,
  addComponent,
  changeFormToCanvas,
  deleteComponent,
  changeHiddenFromComponent,
  lockComponent,
  copyComponentToRedux,
  pasteComponent,
  changeComponentTitle,
} = createReducer.actions
export default createReducer.reducer
