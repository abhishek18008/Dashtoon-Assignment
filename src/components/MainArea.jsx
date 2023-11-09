import React, { useRef } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import * as markerjs2 from "markerjs2";

const MainArea = ({ selectedImage }) => {
  const imgRef = useRef();

  const showMarkerArea = () => {
    if (imgRef.current) {
      // Create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(imgRef.current);

      // Attach an event handler to assign annotated image back to our image element
      markerArea.addEventListener("render", (event) => {
        if (imgRef.current) {
          imgRef.current.src = event.dataUrl;
        }
      });

      // Launch marker.js
      markerArea.show();
    }
  };

  const handleDownload = () => {
    // Implement download logic here
    // You can use the "download" attribute for links or create a Blob and trigger a download
    if (imgRef.current) {
      const imageDataURL = imgRef.current.src;
      console.log(imageDataURL);
      // Add your download logic here
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      {selectedImage ? (
        <>
          {/* Display selected image */}
          <Box position="relative">
            <img
              ref={imgRef}
              src={selectedImage}
              alt="Selected Image"
              style={{ maxWidth: "100%", height: "auto" }}
              onClick={showMarkerArea}
            />
          </Box>

          {/* Download button */}
          <Button mt={4} onClick={handleDownload} colorScheme="blue">
            Download
          </Button>
        </>
      ) : (
        <Box>No image selected</Box>
      )}
    </Flex>
  );
};

export default MainArea;
