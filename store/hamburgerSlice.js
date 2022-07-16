import { createSlice } from "@reduxjs/toolkit";

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    menuIsOpen: false,
  },
  reducers: {
    openMenu: (state) => {
      state.menuIsOpen = true;
    },
    closeMenu: (state) => {
      state.menuIsOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
