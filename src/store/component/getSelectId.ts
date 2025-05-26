import {ComponentInfoType} from '.'

export default function getSelectId(index: number, componentList: ComponentInfoType[]) {
  let selectId: string
  const newComponentList = componentList.filter(c => !c.ishidden)
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
