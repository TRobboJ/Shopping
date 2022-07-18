import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  minPrice: 0,
  maxPrice: Math.Infinity,
  ratingQuery: 0,
};

//product filter menu will be closed by default on mobile view and open by default on tablets/desktop windows
let defaultMenuState = true
if (typeof window !== 'undefined'){
const mediaQuery = window.matchMedia('(min-width: 650px)');
if (mediaQuery.matches) {
  defaultMenuState = true
}
if (!mediaQuery.matches) {
  defaultMenuState = false
}
}

export const fliterSlice = createSlice({
  name: "filter",
  initialState: { ...initialState, menuIsOpen: defaultMenuState }, 
  reducers: {
    openMenu: (state) => {
      state.menuIsOpen = true;
    },
    closeMenu: (state) => {
      state.menuIsOpen = false;
    },
    filterQuery: (state, action) => {
      state.query = action.payload.toString();
    },
    setMinPrice: (state, action) => {
      state.minPrice = parseInt(action.payload);
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = parseInt(action.payload);
    },
    setRating: (state, action) => {
      state.ratingQuery = parseInt(action.payload);
    },
    clearFilters: (state) => {
      state.query = "";
      state.minPrice = 0;
      state.maxPrice = Math.Infinity;
      state.ratingQuery = 0;
    },
  },
});

export const {
  openMenu,
  closeMenu,
  filterQuery,
  clearFilters,
  setMaxPrice,
  setMinPrice,
  setRating,
} = fliterSlice.actions;

export default fliterSlice.reducer;
