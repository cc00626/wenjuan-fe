import React, {FC} from 'react'
import {useLoadQuestionData} from '../../../hooks/useLoadQuestionData'
import style from './index.module.scss'
import CanvasComponent from './CanvasComponent'
const Edit: FC = () => {
  const {loading, error} = useLoadQuestionData()
  return (
    <div className={style['edit-main']}>
      <div className={style.header} style={{height: '40px'}}>
        header
      </div>
      <div className={style.container}>
        <div className={style.left}>left</div>
        <div className={style.center}>
          <div className={style.canvas}>
            <div style={{height: '700px'}}>
              <CanvasComponent loading={loading} />
            </div>
          </div>
        </div>
        <div className={style.right}>right</div>
      </div>
    </div>
  )
}
export default Edit
