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
    clearSelectedImage: (state) => {
      state.index = null;
      state.imageUrl = null;
    },
  },
});

export const { selectImage ,clearSelectedImage} = selectedImageSlice.actions;

export default selectedImageSlice.reducer;
