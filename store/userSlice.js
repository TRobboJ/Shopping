import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    menuIsOpen: false,
  },
  reducers: {
    openLoginMenu: (state) => {
      state.menuIsOpen = true;
    },
    closeLoginMenu: (state) => {
      state.menuIsOpen = false;
    },
  },
});

export const { openLoginMenu, closeLoginMenu } = userSlice.actions;

export default userSlice.reducer;
