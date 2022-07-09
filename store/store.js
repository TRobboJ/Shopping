import { configureStore } from '@reduxjs/toolkit'
import hamburgerReducer from './hamburgerSlice'
import filterReducer from './filterSlice'

export default configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    filter: filterReducer,
  },
})