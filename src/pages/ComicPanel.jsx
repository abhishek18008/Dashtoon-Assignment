import React, { useState } from "react";
import { Box, Grid, Image, Heading, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ComicPanel = () => {
  const comicImages = useSelector((state) => state.generatedImages.images); 
  // const [comicImages, setComicImages] = useState([
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  //   "https://placekitten.com/200/300",
  // ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Heading textAlign="center" my={4}>
        Comic Panel
      </Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} p={4}>
        {comicImages.map((image, index) => (
          <Box
            key={index}
            boxShadow="lg"
            borderRadius="md"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={image}
              alt={`Comic Image ${index + 1}`}
              h="200px"
              w="100%"
              objectFit="cover"
              cursor="pointer"
              onClick={() => openLightbox(image)}
            />
          </Box>
        ))}
      </Grid>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeLightbox}
        >
          <Image
            src={selectedImage}
            alt="Selected Comic Image"
            maxH="80%"
            maxW="80%"
            objectFit="contain"
          />
        </div>
      )}
    </>
  );
};

export default ComicPanel;
