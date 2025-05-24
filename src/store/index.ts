import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user'
import {StateType} from './user'
export type StoreType = {
  user: StateType
}

export default configureStore<StoreType>({
  reducer: {
    user: userReducer,
  },
})
