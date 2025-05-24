import {createSlice, PayloadAction} from '@reduxjs/toolkit'
export type StateType = {
  username: string
  nickname: string
}
const INIT_STATE: StateType = {username: '', nickname: ''}
const createReducer = createSlice({
  name: 'user',
  initialState: INIT_STATE,
  reducers: {
    setUserInfoToReduce(state: StateType, action: PayloadAction<StateType>) {
      return action.payload //从redux中获取用户信息
    },
    logoutToReduce() {
      return INIT_STATE //退出登录,清空用户信息
    },
  },
})

export const {setUserInfoToReduce, logoutToReduce} = createReducer.actions
export default createReducer.reducer
