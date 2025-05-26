import React, {FC} from 'react'
import {useLoadQuestionData} from '../../../hooks/useLoadQuestionData'
import style from './index.module.scss'
import CanvasComponent from './CanvasComponent'
import {useDispatch} from 'react-redux'
import {changeSelectId} from '../../../store/component'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
const Edit: FC = () => {
  const {loading} = useLoadQuestionData()
  const dispatch = useDispatch()
  //点击外部,清除点击组件的边框样式
  const handleRemoveSelected = () => {
    dispatch(changeSelectId(''))
  }

  return (
    <div className={style['edit-main']}>
      <div className={style.header} style={{height: '40px'}}>
        header
      </div>
      <div className={style.container}>
        <div className={style.left}>
          <LeftPanel />
        </div>
        <div className={style.center} onClick={handleRemoveSelected}>
          <div className={style.canvas}>
            <div style={{height: '700px'}}>
              <CanvasComponent loading={loading} />
            </div>
          </div>
        </div>
        <div className={style.right}>
          <RightPanel />
        </div>
      </div>
    </div>
  )
}
export default Edit
