import React, { useRef } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import * as markerjs2 from "markerjs2";
import { updateAnnotatedImage } from "../features/generatedImages/generatedImagesSlice";

const MainArea = () => {
  const imgRef = useRef();
  const dispatch = useDispatch();

  // Assuming you have a slice for selectedImage
  const selectedImage = useSelector((state) => state.selectedImage.imageUrl);

  // Assuming you have a slice for generatedImages
  const generatedImages = useSelector((state) => state.generatedImages.images);

  const showMarkerArea = () => {
    if (imgRef.current) {
      // Find the index of the selectedImage in the generatedImages array
      const indexOfSelectedImage = generatedImages.indexOf(selectedImage);

      // Create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(imgRef.current);

      // Attach an event handler to assign annotated image back to our image element
      markerArea.addEventListener("render", (event) => {
        if (imgRef.current) {
          // Dispatch the action to update the annotated image in the Redux state
          dispatch(updateAnnotatedImage({ index: indexOfSelectedImage, image: event.dataUrl }));
        }
      });

      // Launch marker.js
      markerArea.show();
    }
  };

  const handleDownload = () => {
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
