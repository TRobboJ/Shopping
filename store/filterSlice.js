import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
  minPrice: 0,
  maxPrice: Math.Infinity,
  ratingQuery: 0,
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
    setMinPrice: (state, action) => {
      state.minPrice = parseInt(action.payload)
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = parseInt(action.payload)
    },
    setRating: (state, action) => {
      state.ratingQuery = parseInt(action.payload)
    },
    clearFilters: (state) => {
      state.query = ''
      state.minPrice = 0
      state.maxPrice = Math.Infinity
      state.ratingQuery = 0      
    }
  },
})

export const { openMenu, closeMenu, filterQuery, clearFilters, setMaxPrice, setMinPrice, setRating } = fliterSlice.actions

export default fliterSlice.reducer