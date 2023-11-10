// selectedImageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const selectedImageSlice = createSlice({
  name: "selectedImage",
  initialState: { index: null, imageUrl: null },
  reducers: {
    selectImage: (state, action) => {
      state.index = action.payload.index;
      state.imageUrl = action.payload.imageUrl;
    },
  },
});

export const { selectImage } = selectedImageSlice.actions;

export default selectedImageSlice.reducer;
