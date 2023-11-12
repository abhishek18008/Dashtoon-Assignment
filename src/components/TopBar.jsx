
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { selectImage } from "../features/selectedImage/selectedImageSlice";
import { removeImage } from "../features/generatedImages/generatedImagesSlice";
import { useDispatch, useSelector } from "react-redux";

const TopBar = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.generatedImages.images); 
  const selectedImageIndex = useSelector((state) => state.selectedImage.index);
  
  const handleImageClick = (index) => {
    dispatch(selectImage({ index, imageUrl: images[index] }));
  };
  const handleRemoveClick = (index) => {
    dispatch(removeImage(index));
  };
  return (
    <Box width={"100%"} bgColor={"silver"}>
        <Box display="flex" height="max-content" style={{ overflowX: "auto" }}>
          {images.map((url, index) => (
            <Box
              key={index}
              marginRight="2"
              style={{
                minHeight: "220px",
                aspectRatio: "1",
                maxHeight: "220px",
                cursor: "pointer",
                border: index === selectedImageIndex ? "2px solid red" : "none",
              }}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={url}
                alt={`Image ${index + 1}`}
              />
              <Button onClick={() => handleRemoveClick(index)}>Remove</Button>
            </Box>
          ))}
        </Box>
    </Box>
  );
};

export default TopBar;






