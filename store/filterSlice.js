import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: ''
}

export const fliterSlice = createSlice({
  name: 'filter',
  initialState: {...initialState, menuIsOpen: true}, //set back to false later
  reducers: {
    openMenu: (state) => {
        state.menuIsOpen = true
    },
    closeMenu: (state) => {
        state.menuIsOpen = false
    },
    filterQuery: (state, action) => {
      state.query = action.payload.toString()
    },
    clearFilters: (state) => {
      state.query = ''
    }
  },
})

export const { openMenu, closeMenu, filterQuery, clearFilters, } = fliterSlice.actions

export default fliterSlice.reducer