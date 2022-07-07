import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
});

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchPhotos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      state.loading = false;
      state.photos = action.payload;
    },
    [fetchPhotos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default photoSlice.reducer;
