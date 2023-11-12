import React, { useRef } from "react";
import { Box, Flex, Button, Tooltip, Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { FaPencilAlt, FaDownload, FaTrashAlt } from "react-icons/fa"; // Importing icons
import * as markerjs2 from "markerjs2";
import { updateAnnotatedImage } from "../features/generatedImages/generatedImagesSlice";
import { selectImage,clearSelectedImage } from "../features/selectedImage/selectedImageSlice";

const MainArea = () => {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.selectedImage.imageUrl);
  const generatedImages = useSelector((state) => state.generatedImages.images);

  const showMarkerArea = () => {
    if (imgRef.current) {
      const indexOfSelectedImage = generatedImages.indexOf(selectedImage);
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      markerArea.settings.displayMode = "popup";

      markerArea.addEventListener("render", (event) => {
        if (imgRef.current) {
          const annotatedImage = event.dataUrl;
          dispatch(
            updateAnnotatedImage({ index: indexOfSelectedImage, image: annotatedImage })
          );

          // Set the selected image to the annotated image
          dispatch(selectImage({ index: indexOfSelectedImage, image: annotatedImage }));
        }
      });

      markerArea.show();
    }
  };

  const handleDownload = () => {
    if (imgRef.current) {
      const imageDataURL = imgRef.current.src;
      
      const a = document.createElement("a");
      a.href = imageDataURL;
      a.download = "annotated_image.png";
      a.click();
    }
  };

  const handleClearImage = () => {
    dispatch(clearSelectedImage());
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {selectedImage ? (
        <Box position="relative" maxWidth="100%">
          <img
            ref={imgRef}
            src={selectedImage}
            alt="Selected Image"
            style={{ maxWidth: "100%", height: "auto", margin: "0 auto" }}
          />

          {/* Edit button */}
          <Tooltip label="Edit Image" placement="top">
            <Button
              mt={2}
              onClick={showMarkerArea}
              colorScheme="teal"
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
            >
              <Icon as={FaPencilAlt} boxSize={5} />
            </Button>
          </Tooltip>

          {/* Download button */}
          <Tooltip label="Download Image" placement="top">
            <Button
              mt={2}
              onClick={handleDownload}
              colorScheme="blue"
              position="absolute"
              top="0"
              right="0"
            >
              <Icon as={FaDownload} boxSize={5} />
            </Button>
          </Tooltip>

          {/* Clear selected image button */}
          <Tooltip label="Clear Image" placement="top">
            <Button
              mt={2}
              onClick={handleClearImage}
              colorScheme="red"
              position="absolute"
              bottom="0"
              left="50%"
            >
              <Icon as={FaTrashAlt} boxSize={5} />
            </Button>
          </Tooltip>
        </Box>
      ) : (
        <Box>No image selected</Box>
      )}
    </Flex>
  );
};

export default MainArea;
