import { configureStore } from "@reduxjs/toolkit";
import photoCardReducer from "./photoCardSlice.js";

export default configureStore({
  reducer: {
    photoCard: photoCardReducer,
  },
});
