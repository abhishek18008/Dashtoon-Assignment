// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import generatedImagesReducer from '../features/generatedImages/generatedImagesSlice';
import selectedImageReducer from '../features/selectedImage/selectedImageSlice';

export default configureStore({
  reducer: {
    generatedImages: generatedImagesReducer,
    selectedImage: selectedImageReducer,
  },
});
