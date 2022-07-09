import { createSlice } from '@reduxjs/toolkit'

export const fliterSlice = createSlice({
  name: 'filter',
  initialState: {
    menuIsOpen: false,
  },
  reducers: {
    openMenu: (state) => {
        state.menuIsOpen = true
    },
    closeMenu: (state) => {
        state.menuIsOpen = false
    },
  },
})

export const { openMenu, closeMenu } = fliterSlice.actions

export default fliterSlice.reducer