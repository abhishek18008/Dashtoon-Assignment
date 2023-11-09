import React, { useState } from "react";
import { Flex, Image, Box } from "@chakra-ui/react";

const TopBar = ({ generatedImages, onSelectImage }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    onSelectImage(generatedImages[index]);
    setSelectedImageIndex(index);
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
