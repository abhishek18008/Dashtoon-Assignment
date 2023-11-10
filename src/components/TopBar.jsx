import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Box, Image } from "@chakra-ui/react";
import { selectImage } from "../features/selectedImage/selectedImageSlice"; // Import your Redux action

const TopBar = () => {
  const dispatch = useDispatch();
  const generatedImages = useSelector((state) => state.generatedImages.images); // Update with your generated images slice name

  const selectedImageIndex = useSelector((state) => state.selectedImage.index);

  const handleImageClick = (index) => {
    dispatch(selectImage({ index, imageUrl: generatedImages[index] }));
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap={4}>
      {generatedImages.map((image, index) => (
        <Box
          key={index}
          width="200px"
          border={selectedImageIndex === index ? "2px solid blue" : "none"}
          borderRadius="md"
          cursor="pointer"
          onClick={() => handleImageClick(index)}
        >
          <Image src={image} alt={`Generated Image ${index}`} />
        </Box>
      ))}
    </Flex>
  );
};

export default TopBar;
