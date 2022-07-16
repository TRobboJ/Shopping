import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "./hamburgerSlice";
import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    filter: filterReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
