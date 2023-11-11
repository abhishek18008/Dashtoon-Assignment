import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [], // Your initial state here
};

const generatedImagesSlice = createSlice({
  name: "generatedImages",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    updateAnnotatedImage: (state, action) => {
      const { index, image } = action.payload;
      state.images[index] = image;
    },
    removeImage: (state, action) => {
      const indexToRemove = action.payload;
      state.images.splice(indexToRemove, 1);
    },
    // Add other reducers as needed
  },
});

export const { addImage, updateAnnotatedImage, removeImage } = generatedImagesSlice.actions;

export default generatedImagesSlice.reducer;
