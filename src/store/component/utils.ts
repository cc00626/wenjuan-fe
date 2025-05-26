import {PayloadAction} from '@reduxjs/toolkit'
import {ComponentInfoType, ComponentStateType} from '.'

export function getSelectId(fe_id: string, componentList: ComponentInfoType[]) {
  let selectId: string
  const newComponentList = componentList.filter(c => !c.ishidden)
  const index = newComponentList.findIndex(c => c.fe_id === fe_id)
  if (index < 0) {
    return
  }
  //只剩一个组件
  if (newComponentList.length === 1) {
    selectId = ''
    return
  }
  if (index === newComponentList.length - 1) {
    //选中最后一位组件
    selectId = newComponentList[index - 1].fe_id
  } else {
    selectId = newComponentList[index + 1].fe_id
  }

  return selectId
}

export function addComponentToCanvas(state: ComponentStateType, componentInfo: ComponentInfoType) {
  if (state.selectId === '') {
    //添加到最后一位
    state.componentList.push(componentInfo)
  } else {
    //添加到选中组件的后面
    const index = state.componentList.findIndex(item => item.fe_id === state.selectId)
    state.componentList.splice(index + 1, 0, componentInfo)
  }
  state.selectId = componentInfo.fe_id
}
