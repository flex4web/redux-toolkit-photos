import { configureStore } from "@reduxjs/toolkit";
import PhotoReducer from "./features/PhotoSlice";

export default configureStore({
  reducer: {
    app: PhotoReducer,
  },
});
