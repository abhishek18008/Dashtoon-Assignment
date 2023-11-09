import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import FormSection from "./FormSection";
import TopBar from "./TopBar";
import MainArea from "./MainArea";

function Layout() {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const addImage = (imageData) => {
    setGeneratedImages([...generatedImages, imageData]);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <Flex height="100vh">
      {/* Right Sidebar */}
      <Box width="300px" bg="gray.200">
        <FormSection addImage={addImage} />
      </Box>

      <Flex flex="1" flexDirection="column">
        {/* Top Bar with Generated Images */}
        <Box bg="blue.500" height="200px">
          <TopBar
            generatedImages={generatedImages}
            onSelectImage={handleImageSelect}
          />
        </Box>

        {/* Main Area with Selected Image */}
        <Flex flex="1">
          <MainArea selectedImage={selectedImage} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;
