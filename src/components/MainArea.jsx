import React from "react";
import { Flex, Box, Image, Button } from "@chakra-ui/react";

function MainArea({ selectedImage }) {
  const handleDownload = () => {
    // Implement download logic here
    // You can use the "download" attribute for links or create a Blob and trigger a download
  };

  return (
    <Flex>
      {/* Main Section with Image */}
      <Box flex="1">
        {selectedImage && (
          <Image src={selectedImage} alt={`Selected Image`} />
        )}
      </Box>

      {/* Sidebar with Download Button */}
      <Box width="300px" bg="gray.200" p={4}>
        <Button onClick={handleDownload} colorScheme="blue">
          Download
        </Button>
      </Box>
    </Flex>
  );
}

export default MainArea;
