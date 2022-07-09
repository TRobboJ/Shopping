import { configureStore } from '@reduxjs/toolkit'
import hamburgerSlice from './hamburgerSlice'

export default configureStore({
  reducer: {hamburgerSlice.reducer},
})