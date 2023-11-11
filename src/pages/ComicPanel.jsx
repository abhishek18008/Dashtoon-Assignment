import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Image, Heading } from "@chakra-ui/react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ComicPanel = () => {
  const comicImages = [
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
    "https://placekitten.com/200/300",
  ];

  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
            cursor="pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt={`Comic Image ${index + 1}`}
              h="200px"
              w="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Grid>

      {lightboxOpen && (
        <Lightbox
          mainSrc={comicImages[lightboxIndex]}
          nextSrc={comicImages[(lightboxIndex + 1) % comicImages.length]}
          prevSrc={comicImages[(lightboxIndex + comicImages.length - 1) % comicImages.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + comicImages.length - 1) % comicImages.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % comicImages.length)}
        />
      )}
    </>
  );
};

export default ComicPanel;
